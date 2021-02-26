# Carrier Certification Tool

A tool to run certification tests against a carrier microservice.

## Usage

Make sure to update the `constants.py` file with the data you'd like to pass to the certification tool. Setup your env file and run the tool.

```bash
cp .env.example .env

venv/bin/python app.py --carrier_account --rates --shipment
```
