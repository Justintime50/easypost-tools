import argparse
import csv
import re

"""Parse a CSV email list of users who have a specific carrier account into a new CSV that is usable.

When we need to notify users of changes made to a carrier integration, this tool can be used to parse
an email list obtained from QueryTool into a usable format ready for platforms such as MailChimp.

QueryTool URL: https://querytool.easypo.net/
Database: "reports"
Carrier: The "$carrier$" variable below is the carrier name string

MySQL:
SELECT u.email
FROM carrier_accounts_metadata cam
JOIN users u on u.id = cam.user_id
WHERE cam.carrier=$carrier$
"""


class Cli():
    def __init__(self):
        parser = argparse.ArgumentParser(
            description='Parse an email list from QueryTool.'
        )
        parser.add_argument(
            '-p',
            '--path',
            required=True,
            help='Path to the CSV to parse.',
        )
        parser.add_argument(
            '-o',
            '--output',
            required=False,
            default='parsed_email_list.csv',
            help='Path to the output file. By default, the CSV will save to the directory the script is run from.',
        )
        parser.parse_args(namespace=self)

    def run(self):
        ParseEmailList.run(
            path=self.path,
            output=self.output,
        )


class ParseEmailList():
    @staticmethod
    def run(path, output='parsed_email_list.csv'):
        """Run the parser and print the output to console.
        """
        (new_list, emails_from_csv, child_accounts_removed, duplicates_removed,
         valid_emails) = ParseEmailList.parse_csv(path)

        ParseEmailList.create_new_csv(new_list, output)

        print('Parsing:', path)
        print('Original emails:', emails_from_csv)
        print('Child accounts removed:', child_accounts_removed)
        print('Duplicates removed:', duplicates_removed)
        print('Valid emails:', valid_emails)
        print('CSV saved to:', output)

    @staticmethod
    def parse_csv(path):
        """Parse an email list from QueryTool by doing the following:

        1) Remove the header
        2) Remove duplicates (users may have multiple carrier accounts for the same carrier)
        3) Remove child account emails (child account emails aren't even real. eg: "child_123@example.com")
        4) Strip whitespace and lowercase all characters (ya know, just in case)
        5) Ensure each email follows a proper email format, if it does not, discard the email
        6) If all checks pass, add it to the new valid email list. Return the stats and new list
        """
        new_list = []
        emails_from_csv = child_accounts_removed = duplicates_removed = valid_emails = 0
        with open(path) as csvfile:
            reader = csv.reader(csvfile)
            next(reader)  # Remove header
            for row in reader:
                email = row[0]
                emails_from_csv += 1
                if re.search(r'child_.+@example.com', email):
                    child_accounts_removed += 1
                    continue
                elif any(email in sublist for sublist in new_list):
                    duplicates_removed += 1
                    continue
                # Ensure that the emails stored are indeed in a correct email format
                elif re.search(r'.+@.+\..+', email):
                    new_list.append([email.strip().lower()])
                    valid_emails += 1
                else:
                    continue

        return new_list, emails_from_csv, child_accounts_removed, duplicates_removed, valid_emails

    @staticmethod
    def create_new_csv(data, output='parsed_email_list.csv'):
        """Creates a new CSV with the parsed data at the path you specify.
        """
        try:
            with open(output, 'w') as csvfile:
                writer = csv.writer(csvfile)
                writer.writerows(data)
        except Exception as error:
            raise Exception(error)


def main():
    Cli().run()


if __name__ == '__main__':
    main()
