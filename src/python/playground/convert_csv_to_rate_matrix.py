import argparse

import logging
import os
import re
from decimal import Decimal

# Convert CSV to Rate Matrix
# Add your data to the `DATA` constant and let the tool convert it for you
# This is great to use for UPS MI Rate Cards
# Generates data like the following:
# [289, 289, 291, 294, 300, 310, 318, 318, 318],
# [289, 289, 291, 294, 300, 310, 318, 318, 318],
# [289, 289, 291, 294, 300, 310, 318, 318, 318],
# flake8: noqa

DATA = """$4.69 	$4.69 	$5.22 	$5.40 	$5.73 	$5.86 	$5.96 	$6.10
$4.99 	$4.99 	$5.67 	$5.93 	$6.33 	$6.54 	$6.77 	$7.00 
$5.32 	$5.32 	$6.16 	$6.50 	$6.97 	$7.24 	$7.60 	$7.93 
$5.65 	$5.65 	$6.66 	$7.07 	$7.61 	$7.96 	$8.44 	$8.87 
$5.96 	$5.96 	$7.13 	$7.60 	$8.24 	$8.65 	$9.26 	$9.78 
$6.71 	$6.71 	$8.13 	$8.71 	$9.47 	$10.00 	$10.77 	$11.42 
$7.08 	$7.08 	$8.67 	$9.33 	$10.17 	$10.77 	$11.66 	$12.41 
$7.44 	$7.44 	$9.20 	$9.93 	$10.86 	$11.54 	$12.56 	$13.40 
$7.80 	$7.80 	$9.75 	$10.55 	$11.57 	$12.33 	$13.48 	$14.43 
$8.17 	$8.17 	$10.30 	$11.20 	$12.28 	$13.11 	$14.39 	$15.43 
$15.29 	$15.36 	$20.65 	$24.59 	$28.43 	$30.09 	$36.82 	$42.74 
$15.89 	$15.98 	$21.65 	$25.81 	$29.83 	$31.66 	$39.02 	$45.45 
$16.52 	$16.62 	$22.52 	$27.04 	$31.28 	$33.18 	$40.73 	$47.17 
$17.15 	$17.26 	$23.72 	$28.28 	$32.71 	$34.74 	$42.77 	$49.56 
$17.79 	$17.90 	$24.61 	$29.55 	$34.13 	$36.27 	$44.61 	$51.53 
$18.41 	$18.53 	$25.82 	$30.60 	$35.43 	$37.71 	$46.62 	$54.01 """


ZONE_1_INDEX = 0
ZONE_8_INDEX = 7

CONVERT_TO_ONE_CENT_RATE = [
    '0',
    '1',
]


class Cli():
    def __init__(self):
        parser = argparse.ArgumentParser(
            description='Converts CSV data to a Rate Matrix.'
        )
        parser.add_argument(
            '--duplicate_zone_1',
            required=False,
            default=False,
            action='store_true',
            help='Duplicate zone 1 into zone 2.'
        )
        parser.add_argument(
            '--duplicate_zone_8',
            required=False,
            default=False,
            action='store_true',
            help='Duplicate zone 8 into zone 9.'
        )
        parser.add_argument(
            '--delimiter',
            required=False,
            default=' ',
            help='The delimiter of the string data (eg: a comma) - Default: space.'
        )
        parser.add_argument(
            '--rate_card_type',
            required=True,
            choices=['domestic', 'international'],
            help='Is the rate table "domestic" or "international"'
        )
        parser.parse_args(namespace=self)

    def run(self):
        RateMatrixConverter.main(
            duplicate_zone_1=self.duplicate_zone_1,
            duplicate_zone_8=self.duplicate_zone_8,
            delimiter=self.delimiter,
            rate_card_type=self.rate_card_type
        )


class RateMatrixConverter():
    @staticmethod
    def main(rate_card_type, duplicate_zone_1=False, duplicate_zone_8=False, delimiter=' '):
        """Convert CSV rate matrix data to rate_cents
        array data and print to console.
        """
        data = RateMatrixConverter.convert_data(rate_card_type, delimiter, duplicate_zone_1, duplicate_zone_8)
        RateMatrixConverter.print_data(data)
        RateMatrixConverter.validate_data(data, rate_card_type)

    @staticmethod
    def convert_data(rate_card_type, delimiter=' ', duplicate_zone_1=False, duplicate_zone_8=False):
        """Convert data from a string CSV format to
        a rate_cents array by removing dollar signs,
        decimals, and spaces to get the rate cents,
        then split up and format the integers pretty
        into a rate matrix (zones x number of weights).
        """
        final_array = []
        rows = DATA.split('\n')

        for row in rows:
            row_array = []
            # We don't use full regex here because we have too many custom rules for a catchall
            converted_row = re.sub(r' +', ' ', row.replace('\t', ' ').replace('$', '').replace('n/a', '').strip())
            columns = converted_row.split(delimiter)

            for index, rate in enumerate(columns):
                rate_cents = RateMatrixConverter.convert_to_rate_cents(rate)
                row_array.append(rate_cents)

                if rate_card_type == 'domestic':
                    # Duplicate zone 1 (index 0) into zone 2 (index 1) if elected
                    if duplicate_zone_1 and index == ZONE_1_INDEX:
                        row_array.append(rate_cents)
                    # Duplicate zone 8 (index 7) into zone 9 (index 8) if elected
                    if duplicate_zone_8 and index == ZONE_8_INDEX:
                        row_array.append(rate_cents)

            final_array.append(row_array)

        return final_array

    @staticmethod
    def validate_data(data, rate_card_type):
        """Validate that the matrix is correct
        by checking the length and depth of
        the matrix and matching each row length
        to the expected matrix length and depth.
        """
        matrix_length = len(data[0])
        matrix_depth = len(data)

        # Domestic rate matrices should be a max of 9x16
        # International rate matrixes should be a max of 21x71
        dimension_validators = {
            'international': {'length': 21, 'depth': 71},
            'domestic': {'length': 9, 'depth': 16}
        }

        expected_dimensions = dimension_validators[rate_card_type]
        expected_length = expected_dimensions['length']
        expected_depth = expected_dimensions['depth']

        if matrix_length != expected_length:
            RateMatrixConverter._print_matrix_validator_message(
                expected_length,
                matrix_length,
                'length'
            )
        if matrix_depth != expected_depth:
            RateMatrixConverter._print_matrix_validator_message(
                expected_depth,
                matrix_depth,
                'depth'
            )

        # Validate each row in the matrix matches the length
        for index, row in enumerate(data):
            if len(row) != matrix_length:
                RateMatrixConverter._print_matrix_validator_message(
                    expected_value=index,
                    error_type='row'
                )

    @staticmethod
    def _print_matrix_validator_message(expected_value='', received_value='', error_type=''):
        error_messages = {
            'length': f'Expected a matrix length of {expected_value} zones (columns), received {received_value}.',
            'depth': f'Expected a matrix depth of {expected_value} weights (rows), received {received_value}.',
            'row': f'Row {expected_value} does not match the matrix length, please correct on the rate table!'
        }
        logging.error(error_messages[error_type]) if error_type == 'row' else logging.warning(
            error_messages[error_type])

    @staticmethod
    def convert_to_rate_cents(rate):
        """Converts a string "rate" to rate_cents.
        """
        if rate in CONVERT_TO_ONE_CENT_RATE:
            rate_cents = 1
        else:
            rate_cents = int(round(Decimal(rate) * 100))
        return rate_cents

    @staticmethod
    def print_data(data):
        """Print the new converted array to console.
        """
        for item in data:
            print(str(item) + ',')
        print('')


if __name__ == '__main__':
    Cli().run()
