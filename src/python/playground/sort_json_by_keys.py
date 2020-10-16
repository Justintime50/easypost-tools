import json

# Sort JSON by keys:
# This script will take JSON that is out of order and sort it by its keys
# which even works for nested keys making your JSON beautiful.

# TODO: Add argparse here

with open('lala.json', 'r') as file:
    data = json.load(file)

# TODO: Output to file instead of printing
print(json.dumps(data, indent=4, sort_keys=True))
