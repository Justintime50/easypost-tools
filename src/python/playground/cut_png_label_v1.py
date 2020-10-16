from PIL import Image  # pip3 install pillow
from pathlib import Path

# Cut a multi-page PNG label file into separate single page files

# Set some variables
num_pages = 2
path = '/Users/jhammond/Downloads/26603623370f4b87b0e4765df39bcefe.png'

# Dynamically pull the image size and open the file
fn = Path(path)
im = Image.open(str(fn))
w, h = im.size  # width, height
width_per_page = w // num_pages

# Iterate over each page
for i in range(num_pages):
    # left, upper, right, lower
    im_part = im.crop((i*width_per_page, 0, width_per_page*(i+1), h))
    im_part.save(fn.parent / (f'{fn.stem}_{i+1}.png'))

print(path, 'has been cut!')
