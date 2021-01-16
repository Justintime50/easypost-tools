import os
from pathlib import Path

from PIL import Image, ImageOps  # https://pypi.org/project/Pillow/

# Attribution: [roehnan](https://github.com/roehnan)
# Extract the data of a binary ZPL label into a PNG equivalent
# This is useful as converted ZPL labels contain binary data which Labelary cannot parse
# USAGE: DIR=/path/to/folder FILE=label.zpl python3 extract_zpl_data.py

# Define some variables, update as needed
head = b'^GFB,120000,120000,100,'
foot = b'^FS^XZ'
for fn in Path(os.getenv('DIR')).glob(os.getenv('FILE')):
    print(fn)
    try:
        with fn.open('rb') as F:
            data = F.read()
            if head in data:
                img_data = data[data.index(head) + len(head):-len(foot)]
                print(fn.name)
                print(len(img_data))
                # some files are cut off - pad to 120000 bytes
                while len(img_data) != 120000:
                    img_data += b'\x00'
                # need to invert because the data appears to be stored as a negative
                # took a rough guess on the size 200dpi 4x6
                # n.b. the invert operation requires a greyscale (type 'L') image,
                # so we convert before inverting.
                im = ImageOps.invert(Image.frombytes(
                    '1', (800, 1200), img_data).convert('L'))
                im.save(Path(os.getenv('DIR')) /
                        (fn.stem + '.png'))
                print()
    except Exception as e:
        print(e, fn)
