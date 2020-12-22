# Convert CSV to Rate Matrix
# Add your data to the `DATA` constant and let the tool convert it for you
# This is great to use for UPS MI Rate Cards
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
$18.41 	$18.53 	$25.82 	$30.60 	$35.43 	$37.71 	$46.62 	$54.01 
$19.06 	$19.19 	$26.68 	$31.69 	$36.75 	$39.19 	$48.68 	$56.50 
$19.67 	$19.80 	$27.69 	$32.74 	$38.06 	$40.65 	$50.75 	$59.04 
$20.29 	$20.42 	$28.69 	$33.78 	$39.32 	$41.99 	$52.33 	$60.79 
$20.94 	$21.08 	$29.70 	$34.84 	$40.54 	$43.35 	$54.27 	$63.33"""


def main():
    """Convert CSV rate matrix data to rate_cents
    array data and print to console.
    """
    data = convert_data()
    print_data(data)
    validate_data(data)


def convert_data():
    """Convert data from a string CSV format to
    a rate_cents array by removing dollar signs
    and decimals to get the rate cents, then
    split up and format the integers pretty
    into a rate matrix (9 zones x number of weights).
    """
    final_array = []
    rate_cents_data = convert_to_rate_cents()
    split_row = rate_cents_data.split('\n')

    for line in split_row:
        line_array = []
        if '\t' in rate_cents_data:
            split_columns = line.split('\t')
        else:
            split_columns = line.split(' ')

        for rate in split_columns:
            line_array.append(int(rate))
        final_array.append(line_array)

    return final_array


def validate_data(data):
    """Validate that the matrix is correct
    by checking the length of the matrix
    and matching each lines length to the
    expected matrix length.

    We don't raise an error here because we
    often will need to duplicate zone 8 into
    zone 9 or zone 1 and 2 are the same. These
    are per rate card and will require a small
    amount of manual work after copying the
    output of this tool.
    """
    matrix_length = len(data[0])
    if matrix_length != 9:
        print('\nERROR: This matrix does not contain 9 zones, please correct on the rate table!')
    for i, line in enumerate(data):
        if len(line) != matrix_length:
            print(f'ERROR: Line {i} does not match the matrix length, please correct on the rate table!')


def convert_to_rate_cents():
    """Cut out dollar signs and decimals from string.
    """
    if '$' in DATA:
        no_dollars = DATA.replace('$', '')
        no_decimals = no_dollars.replace('.', '')
    else:
        no_decimals = DATA.replace('.', '')
    return no_decimals


def print_data(data):
    """Print the new converted array to console.
    """
    for item in data:
        print(str(item) + ',')


if __name__ == '__main__':
    main()
