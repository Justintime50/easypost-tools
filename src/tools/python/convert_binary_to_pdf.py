import base64
import os


# Convert a binary string to a PDF
# Usage: BINARY_FILE=binary_label.txt venv/bin/python convert_binary_to_pdf.py

BINARY_FILE = os.getenv('BINARY_FILE')

# Open binary string file
with open(BINARY_FILE, 'rb') as label_file:
    label_data = label_file.read()

# Convert and validate data
pdf_bytes = base64.b64decode(label_data, validate=True)
# This isn't a perfect check but decent indicator if you got a valid PDF or not
if pdf_bytes[:4] != b'%PDF':
    raise ValueError('Missing the PDF file signature')

# Save binary to PDF
with open('label.pdf', 'wb') as f:
    f.write(pdf_bytes)
