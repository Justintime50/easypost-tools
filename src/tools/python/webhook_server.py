import argparse
import json
import logging
import os
from datetime import datetime
from threading import Thread

from flask import (
    Flask,
    request,
)


API = Flask(__name__)
ADDRESS = None
PORT = None
LOG = None
DEBUG = None


class HooksCLI:
    def __init__(self):
        """Initialize the CLI self."""
        parser = argparse.ArgumentParser(description='A lightweight framework to catch webhooks. Great for testing.')
        parser.add_argument(
            '-a',
            '--address',
            default='127.0.0.1',
            type=str,
            help='This is the address Hooks will listen on. (Default: 127.0.0.1)',
        )
        parser.add_argument(
            '-p',
            '--port',
            default=5000,
            type=int,
            help='This is the port Hooks will listen on. (Default: 5000)',
        )
        parser.add_argument(
            '-l',
            '--log',
            action='store_true',
            help='Whether or not webhook data will be logged to a file.',
        )
        parser.add_argument(
            '-d',
            '--debug',
            action='store_true',
            help='Whether or not info will be printed to console.',
        )
        parser.parse_args(namespace=self)
        logging.basicConfig(level=logging.DEBUG)

        global ADDRESS, PORT, LOG, DEBUG
        ADDRESS = self.address
        PORT = self.port
        LOG = self.log
        DEBUG = self.debug

    def run(self):
        Hooks.start_api()


class Hooks:
    def start_api():
        if DEBUG:
            args = f'Arguments: {ADDRESS}, {PORT}, {LOG}, {DEBUG}'
            logging.debug(args)
        API.run(host=ADDRESS, port=PORT, debug=DEBUG)

    def parse_data(webhook):
        """Prase, log, print, and return the data."""
        data = json.loads(webhook)
        if LOG:
            Hooks.generate_log(data)
        if DEBUG:
            Hooks.debug(f'Data parsed: {data}')
        return data

    def generate_log(data):
        """Generate a log of incoming webhook data"""
        log_location = './logs'
        log_file = 'hooks.log'
        if not os.path.exists(log_location):
            os.makedirs(log_location)
        with open(os.path.join(log_location, log_file), 'a') as log:
            log.write(f'{datetime.now()}\n{data}\n\n')
        if DEBUG:
            Hooks.debug(f'{log_file} generated.')
        return data

    def debug(data):
        """Print debugging info to console."""
        logging.debug(data)
        return data


@API.route('/hooks', methods=['POST'])
def receive():
    """Receive a Webhook and parse the data."""
    Thread(target=Hooks.parse_data, args=(request.data,)).start()
    if DEBUG:
        Hooks.debug(f'Webhook received. Data: {request.data}')
    return "200"


def main():
    HooksCLI().run()


if __name__ == '__main__':
    main()
