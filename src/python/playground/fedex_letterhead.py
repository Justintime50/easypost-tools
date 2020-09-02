import base64
import argparse

desc = """FedEx Letterhead/Signature Images:

Use this script to generate the command to run in prod for uploading FedEx
letterheads and signatures. This will convert an image into a base64 encoded string.
"""

parser = argparse.ArgumentParser(
    description=desc
)
parser.add_argument(
    '-p',
    '--path',
    required=True,
    help='Path to the image file you want to encode.',
)
parser.add_argument(
    '-c',
    '--carrier',
    required=True,
    help='Internal carrier account ID.',
)
parser.add_argument(
    '-s',
    '--slot',
    required=True,
    help='Slot where you want to upload the image to. (eg: IMAGE_1, IMAGE_2)',
)
args = parser.parse_args()


def main():
    """Run the script
    """
    generate_command()


def generate_command():
    """Generate the command to run in prod
    """
    image_path = args.path
    carrier_account_id = args.carrier
    slot = args.slot

    with open(image_path, 'rb') as image_file:
        encoded_string = base64.b64encode(image_file.read()).decode()
    command = "vendor/bundle/bundle exec rails runner script/upload_img_fedex.rb -c '{}' -i '{}' -s '{}'".format(
        carrier_account_id, slot, encoded_string)

    print(command)


if __name__ == "__main__":
    main()
