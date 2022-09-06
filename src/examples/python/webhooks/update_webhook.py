import os

import easypost
from dotenv import load_dotenv

load_dotenv()
easypost.api_key = os.getenv('EASYPOST_TEST_API_KEY')

webhook = easypost.Webhook.retrieve("hook_123...")

webhook.update(
    webhook_secret="sécret",
)

print(webhook)
