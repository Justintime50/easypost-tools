#!/bin/bash

# Setup the Dotnet environment (requires that the dotnet-sdk already be installed)
# https://twiki.easypo.net/do/view/APISupport/CSharpNETCoreOnMac

# Usage: ./setup-dotnet.sh my_project

echo "Setting up a dotnet project"

mkdir "$1"
cd "$1" || exit
dotnet new console
dotnet add package EasyPost-Official
dotnet add package Newtonsoft.Json --version 12.0.3
dotnet run

echo "Dotnet project setup! Run the project in the future with 'dotnet run'."
