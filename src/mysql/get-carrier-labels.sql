/* Get label records for a carrier by name */

SELECT id as postage_id, shipment_id, carrier, user_id, service, created_at
FROM postage_labels
WHERE carrier='StarTrack'
LIMIT 20;
