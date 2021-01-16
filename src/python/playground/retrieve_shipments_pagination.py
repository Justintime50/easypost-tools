import os

import easypost
from dotenv import load_dotenv

"""Retrieve a list of shipments via pagination

For some reports (i.e: shipments) when using the API it returns information in Pages.
Our documentation shows how to limit page_size from 1-100 but the question came about
on how to access multiple pages. The answer that I found was that it isn't as simple
as creating a response URL that has "page_number = 2". What you need to do is check on
the returned data if "has_more" is True and then pass the same report query back with
the additional option of "before_id" set to the id of the last item returned. Meaning
if you have "page_size" set to 20 but you get 140 responses you'll have 7 pages and to
get page 2 you need to set the "before_id= shipments.shipments[19].id". To get all the
other pages just keep getting the next block by sending the same request with the
"before_id" set to the id of the last returned item. As far as coding goes I wrote up
one method but a better way is to create a function that calls itself until
"has_more= False" and adds each set of information to the response until it has every
page and returns the whole set of data. For my purpose though I just created a while
loop to do it as a quick example to customers which I've included here in Python
"""

load_dotenv()
easypost.api_key = os.getenv('EASYPOST_TEST_API_KEY')

start_date = '2020-05-01T00:00:00Z'
end_date = '2020-06-02T08:50:00Z'

shipments = easypost.Shipment.all(
    start_datetime=start_date,
    end_datetime=end_date,
    page_size='5',
)

while shipments.has_more is True:
    additional_shipments = easypost.Shipment.all(
        start_datetime=start_date,
        end_datetime=end_date,
        before_id=shipments.shipments[-1].id,
        page_size='5',
    )

    for shipment in additional_shipments['shipments']:
        shipments.shipments.append(shipment)

    shipments.has_more = additional_shipments.has_more


for shipment in shipments['shipments']:
    print(shipment.id + ': ' + shipment.created_at)

print('Last item: ' + shipments.shipments[-1].id)
