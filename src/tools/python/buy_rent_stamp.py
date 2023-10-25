import os
import sys

import easypost
import slack_sdk
from dotenv import load_dotenv


# Buy Rent Stamp
# Automate paying your rent with EasyPost by purchasing a stamp and sending the label to Slack.

EASYPOST_TEST_API_KEY = os.getenv('EASYPOST_TEST_API_KEY')
USPS_CARRIER_ACCOUNT_ID = os.getenv('USPS_CARRIER_ACCOUNT_ID')
SLACK_BOT_TOKEN = os.getenv('SLACK_BOT_TOKEN')
SLACK_CHANNEL = os.getenv('SLACK_CHANNEL')


class RentPostage:
    @staticmethod
    def run():
        """Generate postage and send it to Slack."""
        shipment = RentPostage.buy_label()
        message = f'Time to pay rent!\n\n`{shipment.id}` generated successfully!\n\nLabel: {shipment.postage_label.label_url}'  # noqa
        print(message)
        RentPostage.slack_message(message)

    @staticmethod
    def buy_label():
        """Buy the label (stamp) from EasyPost."""
        load_dotenv()
        easypost.api_key = EASYPOST_TEST_API_KEY
        try:
            shipment = easypost.Shipment.create(
                to_address={
                    'street1': '417 Montgomery Street',
                    'street2': 'FLOOR 5',
                    'city': 'San Francisco',
                    'state': 'CA',
                    'zip': '94104',
                    'country': 'US',
                    'company': 'EasyPost',
                    'phone': '415-456-7890',
                },
                from_address={
                    'street1': '417 Montgomery Street',
                    'street2': 'FLOOR 5',
                    'city': 'San Francisco',
                    'state': 'CA',
                    'zip': '94104',
                    'country': 'US',
                    'company': 'EasyPost',
                    'phone': '415-456-7890',
                },
                # Use the `Letter` package and `First` service for the carrier `USPS` to get a stamp (envelope)
                parcel={
                    'predefined_package': 'Letter',
                    'weight': 1,
                },
                service='First',
                carrier='USPS',
                carrier_accounts=[USPS_CARRIER_ACCOUNT_ID],
            )
        except Exception as ep_error:
            RentPostage.slack_message(ep_error)
            sys.exit(ep_error)
        return shipment

    @staticmethod
    def slack_message(message):
        """Send Slack messages via a bot."""
        slack_client = slack_sdk.WebClient(SLACK_BOT_TOKEN)
        try:
            slack_client.chat_postMessage(
                channel=SLACK_CHANNEL,
                text=message,
            )
            print('Slack message sent!')
        except slack_sdk.errors.SlackApiError as slack_error:
            sys.exit(slack_error)


def main():
    RentPostage.run()


if __name__ == '__main__':
    main()
