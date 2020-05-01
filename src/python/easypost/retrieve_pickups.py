import easypost
import os
from dotenv import load_dotenv

# Setup
load_dotenv()
easypost.api_key = os.getenv("EASYPOST_TEST_API_KEY")

pickup = easypost.Pickup.all()

print(pickup)
