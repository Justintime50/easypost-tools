from PIL import Image
from pathlib import Path
import re

# Cut a multi-page PNG label file into separate single page files

sizes = [(800, 1200), (1200, 1800),  # 4x6 - 200 dpi, 300 dpi
         (1200, 800), (1800, 1200),  # 6x4 - 200 dpi, 300 dpi
         ]
for fn in Path('~/Downloads/label').expanduser().glob('*.png'):
    if re.search(r'[a-f0-9]{32}\.png', fn.name) is not None:
        im = Image.open(str(fn))
        w, h = im.size
        # determine if our image size can be 'cropped' to one of the standard sizes
        # our image will be 'croppable' if:
        #   1. Either the width is in the sizes list and the height is a multiple of the heights
        #   2. Or the height is in the sizes list and the width is a multiple of one of the widths
        valid = False
        for aw, ah in sizes:
            if (w == aw and h > ah and h % ah == 0):
                num_pages = h // ah
                valid = True
                break
            elif (h == ah and w > aw and w % aw == 0):
                num_pages = w // aw
                valid = True
                break
        if valid:
            print(f'{fn.name}, ({w}, {h})')
            if w > h:  # assume that the image is multi-part, horizontal
                width_per_page = w // num_pages
                for i in range(num_pages):
                    # l, u, r, l
                    im_part = im.crop(
                        (i*width_per_page, 0, width_per_page*(i+1), h))
                    name = fn.parent / (f'{fn.stem}_{i+1}.png')
                    print(f'Saving pg {i+1} of {num_pages} to "{name}"...')
                    im_part.save(str(name))
            else:
                true_h = h // num_pages
                for i in range(num_pages):
                    # left, u, r, lower
                    im_part = im.crop((0, i*true_h, w, (i+1)*true_h))
                    name = fn.parent / (f'{fn.stem}_{i+1}.png')
                    print(f'Saving pg {i+1} of {num_pages} to "{name}"...')
                    im_part.save(str(name))
