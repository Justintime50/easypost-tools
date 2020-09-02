# Python Standard Library Imports
import argparse
import csv
import re

# rCARRIERINTEGRATIONTEST
from constants import (
    COUNTRY_NAMES_TO_COUNTRY_CODES,
    HIGH_VALUE_CLEARANCE_FEES_HEADERS,
    OVERWEIGHT_RATE_TABLE_HEADERS,
    RATE_TABLE_HEADERS,
)


NON_NUMERIC_REGEX = re.compile(r'[^0-9\.]')


def format_amount(amount_str):
    amount = NON_NUMERIC_REGEX.sub('', amount_str)
    price = int(round(float(amount) * 100))
    return price


class RateFormatterDDU:

    def __init__(
        self,
        rates_csv,
        output_filename,
        base_rate_cents,
        rate_cents,
        oversize_base_rate_cents,
        oversize_rate_cents,
        rates_type
    ):
        self.rates_csv = rates_csv
        self.output_filename = output_filename
        self.base_rate_cents = base_rate_cents
        self.rate_cents = rate_cents
        self.oversize_base_rate_cents = oversize_base_rate_cents
        self.oversize_rate_cents = oversize_rate_cents
        self.rates_type = rates_type

    def execute(self):
        self.format_wwe_ddu_rates()

    def format_wwe_ddu_rates(self):
        csv_data = self.format_rows()
        self.write_rates_csv(csv_data)
        self.write_overweight_rates_csv(csv_data)

    def format_rows(self):
        formatted_rows = []
        country_headers = []

        with open('./' + self.rates_csv) as wwe_ddu_rates_csv:
            reader = csv.reader(wwe_ddu_rates_csv)
            country_headers = next(reader, None)
            rows = [row for row in reader]

            for country in country_headers:
                index = country_headers.index(country)
                for row in rows:
                    if index == 0:
                        pass
                    else:
                        rate_cents = format_amount(row[index])
                        formatted_rows.append({
                            'rate_cents': rate_cents,
                            'weight_oz': row[0],
                            'origin_country': 'US',
                            'dest_country': country,
                            'zone': '',  # doesn't apply to DDU rates, but still required for rate table
                            'service': 'WorldwideEconomyDDU',
                        })

        return {
            'rates': formatted_rows,
            'countries': country_headers
        }

    def write_rates_csv(self, csv_data):
        output_rates_csv = f'{self.output_filename}'
        with open(output_rates_csv, mode='w') as wwe_ddu_rates_csv:
            rates = csv_data['rates']
            csv_writer = csv.writer(
                wwe_ddu_rates_csv, delimiter=',', quotechar="'")
            csv_writer.writerow(RATE_TABLE_HEADERS)

            for rate in rates:
                csv_writer.writerow([
                    rate['origin_country'],
                    rate['dest_country'],
                    rate['weight_oz'],
                    rate['zone'],
                    rate['service'],
                    rate['rate_cents']
                ])

    def write_overweight_rates_csv(self, csv_data):
        output_rates_csv = f'{self.output_filename}'
        with open(output_rates_csv, mode='w') as overweight_rates_csv:
            countries = csv_data['countries']
            csv_writer = csv.writer(overweight_rates_csv)
            csv_writer.writerow(OVERWEIGHT_RATE_TABLE_HEADERS)

            for country in countries:
                csv_writer.writerow([
                    'US',
                    country,
                    1120,  # only need the highest possible weight, which is 70 lbs
                    '',  # zone
                    'WorldwideEconomyDDU',  # service
                    self.base_rate_cents,  # base rate
                    self.rate_cents,  # how much to charge on top of base for every lb
                    self.oversize_base_rate_cents,
                    self.oversize_rate_cents
                ])


class RateFormatterDDP:

    def __init__(
        self,
        rates_csv,
        output_filename,
        rates_type
    ):
        self.rates_csv = rates_csv
        self.output_filename = output_filename
        self.rates_type = rates_type

    def execute(self):
        self.format_wwe_ddp_rates()

    def format_wwe_ddp_rates(self):
        rows = self.get_rows_from_csv(self.rates_csv)

        format_rows_fn = {
            'regular': self.format_rows__regular__rates,
            'overweight': self.format_rows__overweight__rates,
            'high_value_clearance_fees': self.format_rows__high_value_clearance_fees,
            'zones': self.check_rows__zone
        }

        # TODO: update so file name is also formatted in the output
        format_rows_fn[self.rates_type](
            rows, self.rates_type, carrier_account=None)

    def get_rows_from_csv(self, rates_csv):
        with open(self.rates_csv) as wwe_ddp_rates_csv:
            csv_reader = csv.reader(wwe_ddp_rates_csv)
            rows = [row for row in csv_reader]
        return rows

    def format_rows__high_value_clearance_fees(self, rows, filetype, carrier_account):
        output_csv_filename = f'{self.output_filename}'
        with open(output_csv_filename, mode='w') as f:
            csv_writer = csv.writer(f, delimiter=',', quotechar="'")

            csv_writer.writerow(HIGH_VALUE_CLEARANCE_FEES_HEADERS)

            fee_rows = rows[1:]
            for row in fee_rows:
                dest_country_code = self.get_country_code(row[0])
                threshold_subunits = format_amount(row[1])
                threshold_currency_code = row[2]
                fee_subunits = format_amount(row[3])
                fee_currency_code = row[4]

                csv_writer.writerow(
                    [
                        dest_country_code,
                        threshold_subunits,
                        threshold_currency_code,
                        fee_subunits,
                        fee_currency_code
                    ]
                )

    def check_rows__zone(self, rows, filetype, carrier_account):
        # check is zero padded if less than 4 digits for Australia
        pass

    def format_rows__regular__rates(self, rows, filetype, carrier_account):
        """EXAMPLE CSV:

        Country,Zone,17.637,35.274,52.911,70.548,88.185,105.822,123.459,141.096,...
        AUSTRALIA,1,8.61,11.35,14.08,16.82,19.55,22.29,25.03,27.76,...
        AUSTRALIA,2,10.98,14,17.02,19.75,22.77,25.51,28.52,31.26,...
        AUSTRALIA,3,10.54,13.61,16.68,19.42,22.49,25.22,28.29,31.03,...
        ...

        EXAMPLE OUTPUT CSV:

        origin_country,dest_country,weight_oz,zone,service,rate_cents
        UK,AT,17.637,1,WorldwideEconomyDDP,959
        UK,AT,35.274,1,WorldwideEconomyDDP,1247
        UK,AT,52.911,1,WorldwideEconomyDDP,1525
        ...

        """

        output_csv_filename = f'{self.output_filename}'
        with open(output_csv_filename, mode='w') as output_rates_csv:
            csv_writer = csv.writer(
                output_rates_csv, delimiter=',', quotechar="'")

            csv_writer.writerow(RATE_TABLE_HEADERS)

            weights_oz = rows[0][2:]
            rates_rows = rows[1:]

            for rates_row in rates_rows:
                dest_country_code = self.get_country_code(rates_row[0])
                zone = rates_row[1]
                prices = rates_row[2:]

                for i, rate in enumerate(prices):
                    rate_cents = format_amount(prices[i])
                    weight_oz = weights_oz[i]

                    csv_writer.writerow(
                        [
                            'US',  # update to a CLI argument. For now hard code origin country code
                            dest_country_code,
                            weight_oz,
                            zone,
                            'WorldwideEconomyDDP',
                            rate_cents,
                        ]
                    )

    def format_rows__overweight__rates(self, rows, filetype, carrier_account):
        """EXAMPLE CSV:

        Country,Zone,15.432,22.046
        AUSTRALIA,1,8.61,11.35
        AUSTRALIA,2,10.98,14
        AUSTRALIA,3,10.54,13.61
        ...

        EXAMPLE OUTPUT CSV:

        origin_country,dest_country,weight_oz,zone,service,base_rate_cents...
        GB,AT,15.432,1,WorldwideEconomyDDP,,959,,
        GB,AT,22.046,1,WorldwideEconomyDDP,,1247,,
        GB,AT,15.432,2,WorldwideEconomyDDP,,1222,,
        ...

        COLUMNS IN OUTPUT CSV:

        origin_country,
        dest_country,
        weight_oz,
        zone,
        service,
        base_rate_cents,
        rate_cents,
        oversize_base_rate_cents,
        oversize_rate_cents

        """

        output_csv_filename = f'{self.output_filename}'
        with open(output_csv_filename, mode='w') as output_rates_csv:
            csv_writer = csv.writer(
                output_rates_csv, delimiter=',', quotechar="'")

            csv_writer.writerow(OVERWEIGHT_RATE_TABLE_HEADERS)

            weights_oz = rows[0][2:]
            rates_rows = rows[1:]

            for rates_row in rates_rows:
                dest_country_code = self.get_country_code(rates_row[0])
                zone = rates_row[1]
                prices = rates_row[2:]

                for i, rate in enumerate(prices):
                    origin_country_code = 'US'  # update to a CLI argument
                    base_rate_cents = ''
                    rate_cents = format_amount(prices[i])
                    oversize_base_rate_cents = ''
                    oversize_rate_cents = ''
                    service = 'WorldwideEconomyDDP'

                    weight_oz = weights_oz[i]

                    csv_writer.writerow(
                        [
                            origin_country_code,
                            dest_country_code,
                            weight_oz,
                            zone,
                            service,
                            base_rate_cents,
                            rate_cents,
                            oversize_base_rate_cents,
                            oversize_rate_cents
                        ]
                    )

    def get_country_code(self, country_name):
        lowered_and_joined_country_name = country_name.lower().strip().replace(' ', '')
        country_code = COUNTRY_NAMES_TO_COUNTRY_CODES[lowered_and_joined_country_name]
        return country_code


class RatesFormatterCLI:

    def __init__(self):
        parser = argparse.ArgumentParser()
        parser.add_argument(
            '--rates_csv',
            help='The CSV to be formatted',
            required=True,
        )
        parser.add_argument(
            '--output_filename',
            help='The filename and path you want to write containing rates',
            required=True,
            default='out/output_file.csv'
        )
        parser.add_argument(
            '--base_rate_cents',
            help='Base rate for overweight rates',
            required=True,
        )
        parser.add_argument(
            '--rate_cents',
            help='The rate in cents to be charged per lb on top of base_rate_cents',
            required=True,
        )
        parser.add_argument(
            '--oversize_base_rate_cents',
            help='Base oversize rate for overweight rates',
            required=True,
        )
        parser.add_argument(
            '--oversize_rate_cents',
            help='The oversize rate in cents to be charged per lb on top of base_rate_cents',
            required=True,
        )
        parser.add_argument(
            '--incoterm',
            help='Specify if DDU or DDP',
        )
        parser.add_argument(
            '--rates_type',
            help='Specify if rates are overweight or regular'
        )

        self.args = parser.parse_args()

    def run(self):
        args = self.args
        if args.incoterm == 'DDP':
            rates_formatter = RateFormatterDDP(
                args.rates_csv,
                args.output_filename,
                args.rates_type,
            )
        else:
            rates_formatter = RateFormatterDDU(
                args.rates_csv,
                args.output_filename,
                args.base_rate_cents,
                args.rate_cents,
                args.oversize_base_rate_cents,
                args.oversize_rate_cents,
                args.rates_type
            )
        rates_formatter.execute()


if __name__ == '__main__':
    RatesFormatterCLI().run()
