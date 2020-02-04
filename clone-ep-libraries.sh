#!/bin/bash

echo -e "Type where you'd like your repos cloned (relative to your home folder)\nEG: git/easypost/libraries"
read -r LOCATION
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
