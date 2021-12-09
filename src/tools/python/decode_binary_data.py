import base64
import os

# Decode Binary Data
# Perfect for decoding a binary ZPL label string
# Usage: DATA='123...' venv/bin/python decode_binary_data.py

DATA = os.getenv('DATA')


def main():
    decoded_data = base64.b64decode(DATA)
    print(decoded_data)


if __name__ == '__main__':
    main()
