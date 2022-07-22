import os

import easypost
from dotenv import load_dotenv

load_dotenv()
easypost.api_key = os.getenv('EASYPOST_TEST_API_KEY')

webhook = easypost.Webhook.create(
    url="https://webhook.site/123",
    webhook_secret="123",
)

print(webhook)
