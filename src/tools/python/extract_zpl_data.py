import os

from PIL import Image, ImageOps

# Extract the data of a binary ZPL label into a PNG equivalent
# This is useful as converted ZPL labels contain binary data which Labelary cannot parse
# NOTE: This script assumes you are using an EasyPost binary ZPL
# Original Concept Attribution: [roehnan](https://github.com/roehnan)
# USAGE: FILE=label.zpl venv/bin/python extract_zpl_data.py

FILE = os.getenv('FILE')
BYTES_PADDING = 120001  # a multiple of your dims + 1. A 4x6 label needs 120001, 4x4 needs 80001, etc
OUTPUT_PATH = 'converted_label.png'

# The dimensions for the final single image file (must pair with BYTES_PADDING) (eg: 800x1200 is 4x6 label)
X_DIM = 800
Y_DIM = 1200

# You may need to alter these based on ZPL data
HEADER = f'^GFB,{BYTES_PADDING-1},{BYTES_PADDING-1},100,'.encode('utf-8')
FOOTER = b'^FS^XZ'
NULL_BINARY_CHAR = b'\x00'

# TODO: Add the ability to extract multi-label data from a single file


def main():
    try:
        with open(FILE, 'rb') as label_file:
            label_data = label_file.read()
            if HEADER and FOOTER in label_data:
                print(f'Converting {FILE} to PNG...')
                image_data = label_data[label_data.index(HEADER) + len(HEADER) : -len(FOOTER)]

                # Pad the PNG until the size is the same as the ZPL
                while len(image_data) != BYTES_PADDING:
                    image_data += NULL_BINARY_CHAR

                save_png(image_data)
                print(f'Image converted successfully: {OUTPUT_PATH}!')
            else:
                raise Exception(f'{FILE} is not a valid ZPL!')
    except Exception:
        raise


def save_png(image_data):
    """Converts binary data to grayscale and inverts the image as it is generated upside down.
    This converts it to a X_DIM x Y_DIM @ 200dpi PNG label.
    """
    image = ImageOps.invert(Image.frombytes('1', (X_DIM, Y_DIM), image_data).convert('L'))
    image.save(OUTPUT_PATH)

    return image


if __name__ == '__main__':
    main()
