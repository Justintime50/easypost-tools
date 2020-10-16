#!/bin/bash

# Setup the Dotnet environment (requires that the dotnet-sdk already be installed)
# https://twiki.easypo.net/do/view/APISupport/CSharpNETCoreOnMac

# Usage: ./setup-dotnet-project.sh my_project

main() {
    echo "Setting up a dotnet project"
    setup_dotnet_project "$1"
    echo "Dotnet project setup! Run the project in the future with 'dotnet run'."
}

setup_folder() {
    mkdir -p "$1"
    cd "$1" || exit
}

setup_dotnet_project() {
    setup_folder "$1"
    dotnet new console
    dotnet add package EasyPost-Official
    dotnet add package Newtonsoft.Json
}

main "$1"
