import json
import os


UGLY_JSON = os.getenv('UGLY_JSON')


def main():
    out = json.dumps(UGLY_JSON, indent=4)
    print(out)


if __name__ == '__main__':
    main()
