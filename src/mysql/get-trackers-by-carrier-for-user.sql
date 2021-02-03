/* Retrieve a list of distinct carriers for a time period and how many trackers are assocaited with each for a single user */

SELECT DISTINCT(carrier), COUNT(*)
FROM trackers 
WHERE created_at >= TIMESTAMP("2020-07-01")
AND created_at < TIMESTAMP("2021-02-01")
AND user_id = "123"
AND mode = "production"
GROUP BY carrier;
