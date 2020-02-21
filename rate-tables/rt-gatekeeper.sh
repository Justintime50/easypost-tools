#!/bin/bash

function asendia {
    # Assign file path
    echo "Path to Asendia rate table:"
    read -r FILE

    # Verify file extension
    # if [[ ! ${FILE##*.} == ".csv" ]] ; then
    #     echo "The Asendia rate table must be a CSV file."
    #     exit 1
    # else
    #     echo "File extension passed!"
    # fi

    # Verify filename
    basename "$FILE"
    FULL_FILENAME="$(basename -- $FILE)"
    if 
        [[ ! ${FULL_FILENAME} == "PriorityTracked.csv" ]] ||
        [[ ! ${FULL_FILENAME} == "PMI.csv" ]] ||
        [[ ! ${FULL_FILENAME} == "PMEI.csv" ]] ||
        [[ ! ${FULL_FILENAME} == "Other.csv" ]] ||
        [[ ! ${FULL_FILENAME} == "InternationalExpress.csv" ]] ||
        [[ ! ${FULL_FILENAME} == "IPA.csv" ]] ||
        [[ ! ${FULL_FILENAME} == "ISAL.csv" ]] ||
        [[ ! ${FULL_FILENAME} == "ePacket.csv" ]] ; then
        echo -e "The Asendia rate table filename must be named after a service level and saved as a CSV\nReference: https://phab.easypo.net/source/asendia/browse/master/asendia/static_data.py$8."
        exit 1
    else
        echo "Filename passed!"
    fi

}

# Execute Asendia
asendia
