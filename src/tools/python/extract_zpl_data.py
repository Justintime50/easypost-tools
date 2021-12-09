import os

from PIL import Image, ImageOps

# Extract the data of a binary ZPL label into a PNG equivalent
# This is useful as converted ZPL labels contain binary data which Labelary cannot parse
# Original Concept Attribution: [roehnan](https://github.com/roehnan)
# USAGE: FILE=label.zpl venv/bin/python extract_zpl_data.py

FILE = os.getenv('FILE')
BYTES_PADDING = 120001  # a multiple of your dims + 1. A 4x6 label needs 120001, 4x4 needs 80001, etc
OUTPUT_PATH = 'converted_label.png'

# The dimensions for the final single image file (must pair with BYTES_PADDING) (eg: 800x1200 is 4x6 label)
X_DIM = 800
Y_DIM = 1200

# TODO: Add the ability to extract multi-label data from a single file


def main():
    try:
        header = f'^GFB,{BYTES_PADDING-1},{BYTES_PADDING-1},100,'.encode('utf-8')
        footer = b'^FS^XZ'
        with open(FILE, 'rb') as label_file:
            label_data = label_file.read()
            if header in label_data:
                print(f'Converting {FILE} to PNG...')
                image_data = label_data[label_data.index(header) + len(header) : -len(footer)]
                print(f'Number of image bytes: {len(image_data)}')
                while len(image_data) != BYTES_PADDING:
                    image_data += b'\x00'
                # Convert to grayscale and invert the image as it is generated upside down
                # This converts it to a X_DIM x Y_DIM @ 200dpi PNG label
                image = ImageOps.invert(Image.frombytes('1', (X_DIM, Y_DIM), image_data).convert('L'))
                image.save(OUTPUT_PATH)
                print(f'Image converted successfully: {OUTPUT_PATH}!')
            else:
                raise Exception(f'Could not find {header} in {FILE}')
    # TODO: This isn't catching errors
    except Exception as error:
        print(error)


if __name__ == '__main__':
    main()
