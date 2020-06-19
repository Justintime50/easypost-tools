/* Retrieve payment logs of a user between dates */

SELECT *
FROM payment_logs
WHERE user_id = $user_ID$ AND created_at >= '2020-05-01' AND created_at < '2020-05-04'
