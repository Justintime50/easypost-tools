import csv
from pathlib import Path
for fn in Path('/Users/jhammond/Documents/ca_3f6f862bdf294bd08f4b4779d271fc60/').glob('*.csv'):
    name = str(fn)  # grab source name - we'll use this for output
    old = Path(fn.parent) / Path(str(fn.name) +
                                 '.old')  # create backup file name
    # create backup file
    fn.rename(Path(fn.parent) / Path(str(fn.name) + '.old'))
    # read source file
    with old.open('r') as F:
        cr = csv.reader(F)
        raw = [r for r in cr]
        header = ['CountryCode'] + [i[0] for i in raw[1:]]
        rows = [[raw[0][n]] +  # country
                [v[n] for v in raw[1:]] for n, _ in enumerate(raw[0][1:], start=1)]  # data by current column
    # write out reformatted contents
    with Path(name).open('w') as O:
        wr = csv.writer(O)
        _ = wr.writerow(header)
        _ = wr.writerows(rows)
