import json
import os


def main():
    order = open_file()
    formatted_order = delete_pii(order)
    print(formatted_order)


def delete_pii(order):
    """Delete all internal information that should not be shared."""
    del order["user"]
    del order["user_id"]
    del order["from_address_id"]
    del order["to_address_id"]
    del order["buyer_address_id"]
    del order["return_address_id"]
    del order["id"]

    for shipment in order["shipments"]:
        del shipment["_internal"]

    formatted_order_json = json.dumps(order, indent=4)
    return formatted_order_json


def open_file():
    with open(os.getenv("JSON_FILE"), "r") as f:
        order_json = json.load(f)
    return order_json


if __name__ == "__main__":
    main()
