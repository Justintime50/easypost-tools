import argparse
import logging
import logging.handlers
import os

import easypost
import requests
from dotenv import load_dotenv

from constants import (CARRIER_NAME, FROM_ADDRESS, LABEL_FORMATS,
                       PROD_CREDENTIALS, TEST_CREDENTIALS, TO_ADDRESS)

# Carrier Certification Tool
# Run various certification tests against a carrier microservice
# USAGE: venv/bin/python app.oy --carrier_account --rates --shipment

LOGGER = logging.getLogger(__name__)
DIR = f'{CARRIER_NAME.lower().replace(" ", "")}_certification'


class Cli():
    def __init__(self):
        parser = argparse.ArgumentParser(
            description='Run certification tests for a carrier microservice.'
        )
        parser.add_argument(
            '-c',
            '--carrier_account',
            required=False,
            default=False,
            action='store_true',
            help='Certify adding a carrier_account.'
        )
        parser.add_argument(
            '-r',
            '--rate',
            required=False,
            default=False,
            action='store_true',
            help='Certify rating.'
        )
        parser.add_argument(
            '-l',
            '--label',
            required=False,
            default=False,
            action='store_true',
            help='Certify buying shipments.'
        )
        parser.add_argument(
            '-v',
            '--void',
            required=False,
            default=False,
            action='store_true',
            help='Certify voiding (refunding) a label.'
        )
        parser.add_argument(
            '-t',
            '--tracking',
            required=False,
            default=False,
            action='store_true',
            help='Certify tracking.'
        )
        parser.add_argument(
            '-m',
            '--manifest',
            required=False,
            default=False,
            action='store_true',
            help='Certify manifesting.'
        )
        parser.add_argument(
            '-p',
            '--pickup',
            required=False,
            default=False,
            action='store_true',
            help='Certify creating a pickup.'
        )
        parser.parse_args(namespace=self)

    def main(self):
        App.main(
            carrier_account=self.carrier_account,
            rate=self.rate,
            label=self.label,
            void=self.void,
            tracking=self.tracking,
            manifest=self.manifest,
            pickup=self.pickup,
        )


class App():
    def main(carrier_account=False, rate=False, label=False, void=False, tracking=False, manifest=False, pickup=False):  # noqa
        load_dotenv()
        easypost.api_base = os.getenv('EASYPOST_BASE_URL', 'https://api.easypost.com/v2')

        App.setup_dir()
        App.setup_logging()

        LOGGER.info(f'Running certification tests for {CARRIER_NAME}...')

        # TODO: Handle the cascading requirement that you must rate before buying, must create an account before rating, etc  # noqa

        easypost.api_key = os.getenv('EASYPOST_PROD_API_KEY')
        if carrier_account:
            carrier_account_id = CarrierAccount.certify()
        # easypost.api_key = os.getenv('EASYPOST_TEST_API_KEY')
        if rate:
            shipments = Rate.certify(carrier_account_id)
        if label:
            shipments = Label.certify(shipments)
        if tracking:
            Tracker.certify(shipments)
        if manifest:
            Manifest.certify(shipments)
        if pickup:
            Pickup.certify(shipments)
        # Keep voiding at the end so that shipment records are still available for functions above
        if void:
            Void.certify(shipments)

        # Run cleanup on tasks as needed
        # easypost.api_key = os.getenv('EASYPOST_PROD_API_KEY')
        CarrierAccount.delete_carrier_acount(carrier_account_id)

        LOGGER.info('Certification tool complete.')

    def setup_logging():
        LOGGER.setLevel(logging.INFO)
        handler = logging.handlers.RotatingFileHandler(
            f'{DIR}/summary.log',
            maxBytes=100000,
            backupCount=1
        )
        formatter = logging.Formatter("%(asctime)s - %(levelname)s - %(message)s")
        handler.setFormatter(formatter)
        LOGGER.addHandler(logging.StreamHandler())
        LOGGER.addHandler(handler)

    def save_response_to_file(filename, mode, content):
        """Helper function to save the response from an EasyPost API call to a file
        """
        with open(f'{DIR}/responses/' + filename, mode) as f:
            f.write(str(content))

    def setup_dir():
        if not os.path.exists(DIR):
            os.makedirs(DIR)
        if not os.path.exists(f'{DIR}/responses'):
            os.makedirs(f'{DIR}/responses')
        if not os.path.exists(f'{DIR}/labels'):
            os.makedirs(f'{DIR}/labels')


class CarrierAccount():
    def certify():
        """Certify that a carrier account can be created correctly with the following assertions:

        1. type
        2. readable name
        3. credentials
        4. test_credentials

        Once we've run our assertions, we save all the output to logs.
        """
        LOGGER.info('Running CarrierAccount tests...')
        carrier_name = CARRIER_NAME.replace(' ', '')
        carrier_account = CarrierAccount.create_carrier_account(carrier_name)

        App.save_response_to_file('carrier_account.log', 'w', carrier_account)

        try:
            assert carrier_name in carrier_account.type, f'"{carrier_name}" is not contained in "{carrier_name.type}"'
            LOGGER.info('CarrierAccount "type": PASS')
        except AssertionError as error:
            LOGGER.warning(f'CarrierAccount "type": FAIL\n{error}')

        try:
            assert carrier_name in carrier_account.readable, f'"{carrier_name}" is not contained in "{carrier_name.readable}"'  # noqa
            LOGGER.info('CarrierAccount "readable": PASS')
        except AssertionError as error:
            LOGGER.warning(f'CarrierAccount "readable": FAIL\n{error}')

        try:
            credential_keys = carrier_account.fields.credentials.to_dict().keys()
            for key in PROD_CREDENTIALS.keys():
                assert key in credential_keys, f'"{key}" is not contained in "{credential_keys}"'
            LOGGER.info('CarrierAccount "credentials": PASS')
        except AssertionError as error:
            LOGGER.warning(f'CarrierAccount "credentials": FAIL\n{error}')

        try:
            test_credential_keys = carrier_account.fields.test_credentials.to_dict().keys()
            for key in TEST_CREDENTIALS.keys():
                assert key in test_credential_keys, f'"{key}" is not contained in "{test_credential_keys}"'
            LOGGER.info('CarrierAccount "test_credentials": PASS')
        except AssertionError as error:
            LOGGER.warning(f'CarrierAccount "test_credentials": FAIL\n{error}')

        return carrier_account.id

    def create_carrier_account(carrier_name):
        try:
            carrier_account = easypost.CarrierAccount.create(
                type=f"{carrier_name}Account",
                description=f"{carrier_name}Account for carrier certification.",
                credentials=PROD_CREDENTIALS,
                test_credentials=TEST_CREDENTIALS,
            )
        except Exception as error:
            LOGGER.error(error)

        return carrier_account

    def delete_carrier_acount(carrier_account_id):
        try:
            carrier_account = easypost.CarrierAccount.retrieve(carrier_account_id)
            carrier_account.delete()
        except Exception as error:
            LOGGER.error(error)


class Rate():
    def certify(carrier_account_id):
        """Certify that shipments can be rated with various criteria:

        1. label_format
        2. address data (TODO: Add this)
        3. customs_info (TODO: Add this)

        Return a list of shipments once done.
        """
        LOGGER.info('Running Rate tests...')
        supported_label_format = LABEL_FORMATS
        shipments = []

        for label_format in supported_label_format:
            shipment = Rate.create_shipment(carrier_account_id, label_format)

            App.save_response_to_file(f'shipment_rate_{label_format}.log', 'w', shipment)

            try:
                assert shipment.rates != [], f'Shipment "rates" ({label_format}) are empty'
                LOGGER.info(f'Shipment "rates" ({label_format}): PASS')
                for rate in shipment.rates:
                    assert rate.carrier == CARRIER_NAME, f'Shipment "rates" ({label_format}) returned is not from {CARRIER_NAME}'  # noqa
            except AssertionError as error:
                LOGGER.warning(f'Shipment "rates" ({label_format}): FAIL\n{error}')

            # TODO: Add an expectation here when we want rates to be empty such as bad address data etc

            shipments.append(shipment)

        return shipments

    def create_shipment(carrier_account_id, label_format):
        try:
            shipment = easypost.Shipment.create(
                to_address=TO_ADDRESS,
                from_address=FROM_ADDRESS,
                parcel={
                    'length': 10,
                    'width': 10,
                    'height': 10,
                    'weight': 10
                },
                # customs_info=CUSTOMS_INFO,
                options={
                    'label_format': label_format,
                    'label_size': '4x6'  # TODO: Make this configurable
                },
                carrier_account=carrier_account_id
            )
        except Exception as error:
            LOGGER.error(error)

        return shipment


class Label():
    def certify(shipments):
        """Certify that labels can be bought with various criteria:

        1. label_format
        2. label_size (TODO: Add this)

        Save the labels to disk once complete.
        """
        LOGGER.info('Running Label tests...')
        bought_shipments = []

        for shipment in shipments:
            label_format = shipment.options.label_format
            bought_shipment = Label.buy_shipment(shipment.id)

            try:
                assert bought_shipment.postage_label, f'Shipment "postage_label" ({label_format}) is empty'
                LOGGER.info(f'Shipment "postage_label" ({label_format}): PASS')
            except AssertionError as error:
                LOGGER.warning(f'Shipment "postage_label" ({label_format}): FAIL\n{error}')

            App.save_response_to_file(f'shipment_buy_{label_format}.log', 'w', bought_shipment)
            Label.save_to_disk(bought_shipment)
            bought_shipments.append(bought_shipment)

        return bought_shipments

    def buy_shipment(shipment_id):
        try:
            shipment = easypost.Shipment.retrieve(shipment_id)
            response = shipment.buy(rate=shipment.lowest_rate())
        except Exception as error:
            LOGGER.error(error)

        return response

    def save_to_disk(shipment):
        """Grab binary label data from EasyPost and save it to disk as a label file
        """
        try:
            response_label_url = shipment.postage_label.label_url
            label_format = shipment.options.label_format
            label_url = 'http://oregon1.jhammond.devvm.easypo.net:5000/s3/files/postage_label/' + response_label_url.rsplit('/', 2)[1] + '/' + response_label_url.rsplit('/', 2)[2]  # noqa # TODO: Fix this, I hate it
            label = requests.get(label_url, stream=True)

            # We don't use the helper function here because we need bytes instead of a string
            with open(f'{DIR}/labels/shipment_buy_{label_format}.{label_format.lower()}', 'wb') as label_file:
                label_file.write(label.content)
        except Exception as error:
            LOGGER.error(error)


class Void():
    def certify(shipments):
        """Certify we can refund a label and get the right response from EP
        """
        LOGGER.info('Running Void tests...')

        for shipment in shipments:
            shipment = Void.refund_shipment(shipment.id)
            label_format = shipment.options.label_format
            refund_status = shipment.refund_status
            expected_refund_status = 'refunded'

            try:
                assert refund_status == expected_refund_status, f'Void "refund_status" ({label_format}) was "{refund_status}", expected "{expected_refund_status}"'  # noqa
                LOGGER.info(f'Void "refund_status" ({label_format}): PASS')
            except AssertionError as error:
                LOGGER.warning(f'Void "refund_status" ({label_format}): FAIL\n{error}')

    def refund_shipment(shipment_id):
        shipment = easypost.Shipment.retrieve(shipment_id)
        shipment.refund()

        return shipment


class Tracker():
    def certify(shipments):
        """Certify that you can track a package:

        1. tracking_code
        """
        LOGGER.info('Running Tracker tests...')

        for shipment in shipments:
            label_format = shipment.options.label_format

            try:
                assert shipment.tracking_code, f'Tracker "tracking_code" ({label_format}) is empty'
                LOGGER.info(f'Tracker "tracking_code" ({label_format}): PASS')
            except AssertionError as error:
                LOGGER.warning(f'Tracker "tracking_code" ({label_format}): FAIL\n{error}')

            # TODO: Can't easily assert tracking_details are populated as it may take time to update

    def track_shipment():
        # TODO: Do we need to retrieve a shipment here? Probably not since we have it from the previous step and
        # not enough time will have passed prior to us retrieving to assert any of the details
        pass


class Manifest():
    def certify(shipments):
        Manifest.manifest_shipment()
        raise NotImplementedError('Manifests not yet implemented')

    def manifest_shipment():
        pass


class Pickup():
    def certify(shipments):
        Pickup.create_pickup()
        raise NotImplementedError('Pickups not yet implemented')

    def create_pickup():
        pass


if __name__ == '__main__':
    Cli().main()
