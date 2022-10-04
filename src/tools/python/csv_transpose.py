import argparse
import csv


# Transpose rows into columns and vice versa for a CSV
# Attribution: [jontsai](https://github.com/jontsai)
# Usage: venv/bin/python csv_transpose.py -f my_file.csv -o output.csv


class CSVTranspose:
    def __init__(self):
        parser = argparse.ArgumentParser(
            description=self.__class__.__doc__,
            formatter_class=argparse.RawDescriptionHelpFormatter,
        )
        parser.add_argument(
            '-f',
            '--file',
            help='Path to the CSV file to modify',
            required=True,
        )
        parser.add_argument(
            '-o',
            '--outfile',
            help='Path to save the modified CSV file',
            required=True,
        )
        parser.parse_args(namespace=self)

    def transpose(self):
        """Transpose a CSV by turning rows into columns and columns into rows

        Uses zip to transpose a matrix.

        In [1]: a = [(1, 2, 3),
          ...:      (4, 5, 6),
          ...:      (7, 8, 9)]

        In [2]: list(zip(*a))
        Out[2]: [(1, 4, 7), (2, 5, 8), (3, 6, 9)]

        See: https://stackoverflow.com/a/4869245/865091
        """
        with open(self.file, 'r') as f:
            reader = csv.reader(f)

            transposed_data = zip(*reader)

            with open(self.outfile, 'w') as out:
                writer = csv.writer(out)
                writer.writerows(transposed_data)


def main():
    CSVTranspose().transpose()


if __name__ == '__main__':
    main()
