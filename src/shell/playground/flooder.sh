#!/bin/bash

# Run a script over and over

main() {
    echo "Flooding the EasyPost API..."
    rm -f flooder.log
    flooder
    open flooder.log
    echo "Script complete"
}

flooder() {
    for i in {1..2} ; do
        echo "$i" >> flooder.log
        ../../../venv/bin/python ../../python/shipments/create_shipment.py >> flooder.log
    done
}

main
