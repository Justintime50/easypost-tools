import unicodedata as ud

# Attribution: [roehnan](https://github.com/roehnan)
# Iterate a file to find non-ascii characters

file = "/Users/jhammond/Downloads/33d990b0f19848fa8874e1f3c91e788d.csv"

with open(file, mode='r', encoding='utf-8', newline='\n') as F:
    data = F.readlines()
    for n, line in enumerate(data, start=1):
        res = []
        for nc, c in enumerate(line):
            try:
                ac = c.encode('utf-8').decode('ascii')
            except UnicodeError:
                res.append((n, nc, c, ud.name(c)))
        if res:
            vals = ' | '.join((f'col: {i[1]}, bad: {i[2]}, Unicode name: {i[3]}' for i in res))
            print(f'Invalid line: {res[0][0]}, {vals}')
