import json
import os


# Sort JSON by keys:
# This script will take JSON that is out of order and sort it by its keys
# which even works for nested keys making your JSON beautiful.

# USAGE: FILE=myfile.json venv/bin/python sort_json_by_keys.py

FILE = os.getenv("FILE")


def main():
    with open(FILE, "r") as file:
        data = json.load(file)

    print(json.dumps(data, indent=4, sort_keys=True))


if __name__ == "__main__":
    main()
