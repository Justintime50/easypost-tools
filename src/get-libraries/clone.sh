#!/bin/bash

# shellcheck disable=SC1090
source "${BASH_SOURCE%/*}/.config"

# clone the EasyPost repos to the location specified
cd || exit
mkdir -p "$LOCATION"
cd "$LOCATION" || exit
echo "Cloning EasyPost libraries..."

git clone https://github.com/EasyPost/easypost-php.git
git clone https://github.com/EasyPost/easypost-node.git
git clone https://github.com/EasyPost/easypost-ruby.git
git clone https://github.com/EasyPost/easypost-python.git
git clone https://github.com/EasyPost/easypost-java.git
git clone https://github.com/EasyPost/easypost-csharp.git
git clone https://github.com/EasyPost/easypost-go.git
git clone https://github.com/EasyPost/easypost-java.git

echo "EasyPost libraries cloned!"
