import argparse
import logging
import logging.handlers
import os

import easypost
import requests
from dotenv import load_dotenv

from constants import (CARRIER_NAME, CREDENTIALS, FROM_ADDRESS, LABEL_FORMATS,
                       TO_ADDRESS)

# Carrier Certification Tool
# Run various certification tests against a carrier microservice
# USAGE: venv/bin/python app.oy --carrier_account --rates --shipment

LOGGER = logging.getLogger(__name__)
DIR = f'{CARRIER_NAME.lower()}_certification'


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
            '--rates',
            required=False,
            default=False,
            action='store_true',
            help='Certify rating.'
        )
        parser.add_argument(
            '-s',
            '--shipment',
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
            rates=self.rates,
            shipment=self.shipment,
            void=self.void,
            tracking=self.tracking,
            manifest=self.manifest,
            pickup=self.pickup,
        )


class App():
    def main(carrier_account=False, rates=False, shipment=False, void=False, tracking=False, manifest=False, pickup=False):  # noqa
        load_dotenv()
        easypost.api_base = os.getenv('EASYPOST_BASE_URL', 'https://api.easypost.com/v2')

        App.setup_dir()
        App.setup_logging()

        LOGGER.info(f'Running certification tests for {CARRIER_NAME}...')

        # TODO: Handle the cascading requirement that you must rate before buying, must create an account before rating, etc  # noqa

        easypost.api_key = os.getenv('EASYPOST_PROD_API_KEY')
        if carrier_account:
            carrier_account_id = CarrierAccount.certify()
        easypost.api_key = os.getenv('EASYPOST_TEST_API_KEY')
        if rates:
            Shipment.certify(carrier_account_id)  # TODO: Split rating and buying out to separate certifications
        if shipment:
            pass
        if tracking:
            Tracker.certify()
        if void:
            Refund.certify()
        if manifest:
            Manifest.certify()
        if pickup:
            Pickup.certify()

        # Run cleanup on tasks as needed
        easypost.api_key = os.getenv('EASYPOST_PROD_API_KEY')
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
        """Certify that a carrier account can be created correctly with the right
        type, readable name, credential structure, etc. Once we've run our assertions,
        we save all the output to logs
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
            for key in CREDENTIALS.keys():
                assert key in credential_keys, f'"{key}" is not contained in "{credential_keys}"'
            LOGGER.info('CarrierAccount "credentials": PASS')
        except AssertionError as error:
            LOGGER.warning(f'CarrierAccount "credentials": FAIL\n{error}')

        try:
            test_credential_keys = carrier_account.fields.test_credentials.to_dict().keys()
            for key in CREDENTIALS.keys():
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
                credentials=CREDENTIALS,
                test_credentials=CREDENTIALS,
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


class Shipment():
    def certify(carrier_account_id):
        """Certify that shipments can be created with various criteria
        such as address data, customs_info, label_formats, etc
        """
        LOGGER.info('Running Shipment tests...')
        supported_label_format = LABEL_FORMATS
        for label_format in supported_label_format:
            shipment = Shipment.create_shipment(carrier_account_id, label_format)

            App.save_response_to_file(f'shipment_rate_{label_format}.log', 'w', shipment)

            try:
                assert shipment.rates != [], 'Shipment "rates" are empty'
                LOGGER.info('Shipment "rates": PASS')
                for rate in shipment.rates:
                    assert rate.carrier == CARRIER_NAME, f'Shipment "rate" returned is not from {CARRIER_NAME}'
            except AssertionError as error:
                LOGGER.warning(f'Shipment "rates": FAIL\n{error}')

            # TODO: Add an expectation here when we want rates to be empty such as bad address data etc

            bought_shipment = Shipment.buy_shipment(shipment.id)

            try:
                assert bought_shipment.postage_label, 'Shipment "postage_label" is empty'
                LOGGER.info(f'Shipment "postage_label - {label_format}": PASS')
            except AssertionError as error:
                LOGGER.warning(f'Shipment "postage_label - {label_format}": FAIL\n{error}')

            App.save_response_to_file(f'shipment_buy_{label_format}.log', 'w', bought_shipment)

            # Save label to disk
            response_label_url = bought_shipment.postage_label.label_url
            label_url = 'http://oregon1.jhammond.devvm.easypo.net:5000/s3/files/postage_label/' + response_label_url.rsplit('/', 2)[1] + '/' + response_label_url.rsplit('/', 2)[2]  # noqa # TODO: Fix this, I hate it
            label = requests.get(label_url, stream=True)

            # We don't use the helper function here because we need bytes instead of a string
            with open(f'{DIR}/labels/shipment_buy_{label_format}.{label_format.lower()}', 'wb') as label_file:
                label_file.write(label.content)

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
                # customs_info=customs_info,
                options={
                    'label_format': label_format,
                    'label_size': '4x6'  # TODO: Make this configurable
                },
                carrier_account=carrier_account_id
            )
        except Exception as error:
            LOGGER.error(error)

        return shipment

    def buy_shipment(shipment_id):
        try:
            shipment = easypost.Shipment.retrieve(shipment_id)
            response = shipment.buy(rate=shipment.lowest_rate())
        except Exception as error:
            LOGGER.error(error)

        return response


class Refund():
    def certif():
        Refund.refund_shipment()
        raise NotImplementedError('Refunds not yet implemented')

    def refund_shipment():
        pass


class Tracker():
    def certify():
        Tracker.track_shipment()
        raise NotImplementedError('Trackers not yet implemented')

    def track_shipment():
        pass


class Manifest():
    def certify():
        Manifest.manifest_shipment()
        raise NotImplementedError('Manifests not yet implemented')

    def manifest_shipment():
        pass


class Pickup():
    def certify():
        Pickup.create_pickup()
        raise NotImplementedError('Pickups not yet implemented')

    def create_pickup():
        pass


if __name__ == '__main__':
    Cli().main()
