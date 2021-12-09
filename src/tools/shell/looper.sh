#!/bin/bash

# Run something over and over

main() {
    echo "Looping..."
    rm -f looper.log
    looper
    open looper.log
    echo "Script complete"
}

looper() {
    # from 1 to x number of loops
    for i in {1..2}; do
        echo "$i" >>looper.log
        ../../../venv/bin/python ../../python/shipments/create_shipment.py >>looper.log
    done
}

main
