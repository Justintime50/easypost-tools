import os

import easypost
from dotenv import load_dotenv


# Delete `all` records of a particular object
# Usage: EASYPOST_PROD_API_KEY=123... venv/bin/python delete_all_child_users.py

API_KEY = os.getenv("EASYPOST_PROD_API_KEY")


def main():
    load_dotenv()
    client = easypost.EasyPostClient(API_KEY)

    authenticated_user = client.user.retrieve_me()

    for child_user in authenticated_user.children:
        try:
            client.user.delete(child_user["id"])
            print(f"{child_user.id} deleted")
        except Exception as error:
            print(f"Deleting {child_user.id} failed: {error}")


if __name__ == "__main__":
    main()
