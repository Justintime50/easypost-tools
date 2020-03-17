"""Extract the data of a binary ZPL label into a PNG equivalent"""
from PIL import Image, ImageOps
from pathlib import Path
import re

# Define some variables, update as needed
path = '/Users/jhammond/Downloads/'
head = b'^XA\n^LH0,0\n^FO0,0\n^GFB,120000,120000,100,'
foot = '^FS^XZ\n'

# Extract the data
for fn in Path(path).glob('*.zpl'):
    with fn.open('rb') as F:
        data = F.read()
        img_data = data[len(head):-len(foot)]
        print(fn.name)
        print(len(img_data))
        # Need to invert because the data appears to be stored as a negative
        # Took a rough guess on the size 200dpi 4x6
        im = ImageOps.invert(Image.frombytes('1', (800,1200), img_data).convert('L'))
        im.save(Path(path) / (fn.stem + '.png'))
        print()
