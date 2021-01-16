#!/bin/bash

# Good creds will return a 405 message, bad creds will return a 401

curl -X GET https://devwebservices.purolator.com/EWS/V2/Estimating/EstimatingService.asmx \
    -u YOUR_USERNAME:YOUR_PASSWORD
