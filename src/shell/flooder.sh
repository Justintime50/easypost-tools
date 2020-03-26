#!/bin/bash

# Run a script over and over

echo "Flooding the EasyPost API..."
rm -f flooder.log

for i in {1..5000} ; do

    python3 ../shipments/create-shipment.py
    echo "$i" >> flooder.log

done

open flooder.log
echo "Script complete"
