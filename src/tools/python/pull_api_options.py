import re


# Attribution: [roehnan](https://github.com/roehnan)
# Pull a list of all EasyPost API options based on the options.rb file

data = open('/Users/jhammond/git/easypost/easypost-tools/files/options.rb', 'r').read()


def returnOptions(data):
    token_specification = [
        ('NAME', r'(?P<name>[A-Z]+_OPTIONS) = (?:Set)?\['),  # name of the group of options
        ('OPTION', r'\:(?P<opname>[a-z_1-3]+),?'),  # name of option
        ('END', r'\].freeze'),  # Statement terminator
    ]
    tok_regex = '|'.join('(?P<%s>%s)' % pair for pair in token_specification)
    SEEN_NAME = False
    for mo in re.finditer(tok_regex, data):
        kind = mo.lastgroup
        value = mo
        if kind == 'NAME':
            SEEN_NAME = True
            n = value.group('name')
            d = []
        elif kind == 'OPTION':
            if SEEN_NAME:
                d.append(value.group('opname'))
        elif kind == 'END':
            if SEEN_NAME:
                SEEN_NAME = False
                yield n, d


def returnNestedOptions(data):
    token_specification = [
        ('NAME', r'(?P<name>[A-Z]+_OPTIONS) = \{'),  # name of the group of options
        ('ENTRY', r'(?P<enname>[a-z_]+)\: \['),  # name of the group of options
        ('OPTION', r'\"(?P<opname>[A-Z_]+)\",?'),  # name of option
        ('ENTRY_END', r'\],?'),  # Statement terminator
        ('END', r'\}.freeze'),  # Statement terminator
    ]
    tok_regex = '|'.join('(?P<%s>%s)' % pair for pair in token_specification)
    SEEN_NAME = False
    SEEN_ENTRY = False
    for mo in re.finditer(tok_regex, data):
        kind = mo.lastgroup
        value = mo
        if kind == 'NAME':
            SEEN_NAME = True
            n = value.group('name')
            d = {}
            v = []
        elif kind == 'ENTRY':
            if not SEEN_ENTRY:
                SEEN_ENTRY = True
                e = value.group('enname')
                v = []
        elif kind == 'OPTION':
            if SEEN_NAME and SEEN_ENTRY:
                v.append(value.group('opname'))
        elif kind == 'ENTRY_END':
            if SEEN_NAME and SEEN_ENTRY:
                SEEN_ENTRY = False
                d[e] = v
        elif kind == 'END':
            if SEEN_NAME:
                SEEN_NAME = False
                SEEN_ENTRY = False
                yield n, d


options = {n: set(d) for n, d in returnOptions(data)}
enum_vals = {k: d[k] for n, d in returnNestedOptions(data) for k in d.keys()}
print('Enumerated options:')
print('\n'.join(sorted(enum_vals.keys())))
for k, v in enum_vals.items():
    print(k)
    print(', '.join(v))
    print()

print('Valid options:')
print(f"{{{', '.join(sorted(options['VALID_OPTIONS']))}}}")
print()

# Determine which of the VALID_OPTIONS are not categorized
print('Options by type:')
ops = set()
for k, v in sorted(options.items()):
    if k != 'VALID_OPTIONS':
        print(f'{k}:')
        print('\n'.join(['* ' + i for i in sorted(v)]))
        print()
        # Keep track of the categorized options we've seen
        ops.update(v)
# Add the enumerated options to our seen list
for k in enum_vals.keys():
    ops.add(k)

print('Options that are valid but uncategorized:')
print('\n'.join(['* ' + i for i in sorted(options['VALID_OPTIONS'] - ops)]))
print()
