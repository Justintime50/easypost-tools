/* Get a shipment's USPS Zone in-between dates */

SELECT shp.public_id AS "Shipment Public ID", shp.usps_zone AS "USPS Zone"
FROM shipments shp
WHERE shp.user_id = $User_ID$ AND shp.created_at BETWEEN CAST($Beginning$ as DATE) and CAST($Ending$ as DATE)
LIMIT 20;
