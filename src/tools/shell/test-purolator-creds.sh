#!/bin/bash

# Use this tool to test if your Purolator carrier credentials are good or not.
# Good creds will return a 405 message, bad creds will return a 401.
# USAGE: USERNAME=123... PASSWORD=123... test-purolator-creds.sh

curl -X GET https://devwebservices.purolator.com/EWS/V2/Estimating/EstimatingService.asmx \
    -u "$USERNAME":"$PASSWORD"
