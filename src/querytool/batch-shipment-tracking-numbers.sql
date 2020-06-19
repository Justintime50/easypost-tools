/* Retrieve all shipments in a batch and return the tracking codes and price of each shipment */

SELECT shipments.public_id AS "Shipment ID", shipments.tracking_code AS "Tracking Code", selected_rates.amount_subunits AS "Price"
FROM batch_shipments
LEFT JOIN shipments ON batch_shipments.shipment_id=shipments.id
LEFT JOIN selected_rates ON batch_shipments.shipment_id=selected_rates.shipment_id
WHERE batch_shipments.batch_id = "18646163";
