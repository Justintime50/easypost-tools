#!/bin/bash

# Use this install script to setup EasyPost Tools

# Install libraries by cloning them
./get-libraries/clone.sh

# Install Python deps
pip3 install python-dotenv
pip3 install easypost

# Install Node deps
npm install dotenv
npm install @easypost/api

# Install Ruby deps
gem install easypost

# Install Java deps

# Install C# deps
