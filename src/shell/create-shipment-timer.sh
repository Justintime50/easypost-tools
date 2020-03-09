#!/bin/bash

# Create shipments by iterating on a timer

echo "Running script in background..."
rm -f create-shipment-timer.log

for i in {1..12} ; do

{
    echo "#########################################################"
    node ../shipments/create-shipment.js
} >> create-shipment-timer.log
sleep 10

done

open create-shipment-timer.log
echo "Script complete"
