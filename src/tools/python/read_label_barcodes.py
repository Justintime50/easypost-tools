import os

from PIL import Image
from pyzbar.pyzbar import decode


# Read the (2D) barcodes of a PNG label
# Doesn't seem to be perfect but works decently well. TODO: Will need some additional documentation.
# Prereq: `brew install zbar`
# Docs: https://github.com/NaturalHistoryMuseum/pyzbar/
# Usage: LABEL_PATH=path/to/label.png venv/bin/python read_label_barcodes.py


LABEL_PATH = os.getenv("LABEL_PATH")


def main():
    image = open_image()
    barcode_data = decode_image_barcodes(image)
    print(barcode_data)


def open_image():
    image = Image.open(LABEL_PATH)
    return image


def decode_image_barcodes(image):
    barcode_data = decode(image)
    return barcode_data


if __name__ == "__main__":
    main()
