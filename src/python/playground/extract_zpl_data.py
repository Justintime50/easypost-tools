"""
Extract the data of a binary ZPL label into a PNG equivalent
This is useful as converted ZPL labels contain binary data which Labelary cannot parse
"""
from PIL import Image, ImageOps  # https://pypi.org/project/Pillow/
from pathlib import Path
import re

# Define some variables, update as needed
head = b'^GFB,120000,120000,100,'
foot = b'^FS^XZ'
for fn in Path('/Users/jhammond/Downloads').glob('a326dd4918ab4912a6e59b2f64c52248.zpl'):
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
                # n.b. the invert operation requires a greyscale (type 'L') image, so we convert before inverting.
                im = ImageOps.invert(Image.frombytes(
                    '1', (800, 1200), img_data).convert('L'))
                im.save(Path('/Users/jhammond/Downloads') /
                        (fn.stem + '.png'))
                print()
    except Exception as e:
        print(e, fn)