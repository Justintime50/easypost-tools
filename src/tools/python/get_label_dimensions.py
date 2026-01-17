import argparse
import os

from PIL import Image
from PyPDF2 import PdfFileReader

# Get Label Dimensions - get various label format dimensions in inches, pixels, and DPI
# Calculate DPI (dots per inch) by dividing pixel width by inch width (eg: 1800px / 6in = 300 DPI)
# Calculate label size in inches by dividing pixels by DPI (eg: 1800px / 300dpi = 6in)
# USAGE: venv/bin/python get_label_dimensions.py -p path/to/label.png


class Cli:
    def __init__(self):
        parser = argparse.ArgumentParser(description="Get details of various label formats")
        parser.add_argument(
            "-p",
            "--path",
            required=True,
            help="Path to the label file.",
        )
        parser.parse_args(namespace=self)

    def run(self):
        LabelDetails.main(
            path=self.path,
        )


class LabelDetails:
    def main(path):
        label_details = {
            "png": LabelDetails.get_png_details,
            "pdf": LabelDetails.get_pdf_details,
        }
        file_extension = os.path.splitext(path)[1].replace(".", "").lower()
        size_pixels, size_inches, dpi = label_details[file_extension.lower()](path)

        console_output = (
            f"Label: {os.path.basename(path)}\n"
            f"Format: {file_extension.upper()}\n"
            f"Pixels: {size_pixels}\n"
            f"Inches: {size_inches}\n"
            f"DPI: {dpi}"
        )
        print(console_output)

    def get_png_details(path):
        png = Image.open(path)
        dpi = png.info.get("dpi")  # Some images may have meta data stripped so we have a fallback here

        # Size in pixels
        width_pixels, height_pixels = png.size

        # Size in inches
        width_inches = (width_pixels / dpi[0]) if dpi else None
        height_inches = (height_pixels / dpi[1]) if dpi else None

        # Format for console
        png_size_pixels = f"{width_pixels}x{height_pixels}"
        png_size_inches = (
            f"{round(width_inches, 1)}x{round(height_inches, 1)}" if width_inches and height_inches else None
        )
        png_dpi = dpi[0] if dpi else None

        return png_size_pixels, png_size_inches, png_dpi

    def get_pdf_details(path):
        pdf = PdfFileReader(open(path, "rb"))
        pdf_details = pdf.getPage(0).mediaBox
        dpi = 72  # For PDFs, 72 points = 1in

        # Size in pixels
        width_pixels = pdf_details.getWidth()
        height_pixels = pdf_details.getHeight()

        # Size in inches
        width_inches = float(width_pixels) / dpi
        height_inches = float(height_pixels) / dpi

        # Format for console
        pdf_size_pixels = f"{width_pixels}x{height_pixels}"
        pdf_size_inches = f"{round(width_inches, 1)}x{round(height_inches, 1)}"
        pdf_dpi = dpi

        return pdf_size_pixels, pdf_size_inches, pdf_dpi


if __name__ == "__main__":
    Cli().run()
