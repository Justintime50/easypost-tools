#!/bin/bash

# shellcheck disable=SC1090
source "${BASH_SOURCE%/*}/.config"

# Pull any changes from each repo in the archive if enabled
echo -e "Pulling existing repos..."

cd && cd "$LOCATION" || exit
for DIR in */ ; do
    printf '%s\n' "$DIR"
    cd "$DIR" && git pull origin master
    cd .. || exit
done
