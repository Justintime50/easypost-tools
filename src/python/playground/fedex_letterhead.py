import argparse
import base64


class FedexLetterhead():
    def __init__(self):
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
            choices=['IMAGE_1', 'IMAGE_2'],
            required=True,
            help='Slot where you want to upload the image to. (eg: IMAGE_1, IMAGE_2)',
        )
        parser.parse_args(namespace=self)

    def generate_command(self):
        """Generate the command to run in prod for FedEx Letterheads and signatures
        """
        image_path = self.path
        carrier_account_id = self.carrier
        slot = self.slot

        with open(image_path, 'rb') as image_file:
            encoded_string = base64.b64encode(image_file.read()).decode()
        command = "vendor/bundle/bundle exec rails runner script/upload_img_fedex.rb -c '{}' -i '{}' -s '{}'".format(
            carrier_account_id, slot, encoded_string)

        print(command)


if __name__ == '__main__':
    FedexLetterhead().generate_command()
