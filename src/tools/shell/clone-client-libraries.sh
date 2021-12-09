#!/bin/bash

# Clone the EasyPost client libraries
# Usage: ./clone-client-libraries.sh ~/my_parent_folder

main() {
    echo "Cloning EasyPost libraries..."
    clone_libraries "$1"
    echo "EasyPost libraries cloned!"
}

clone_libraries() {
    # clone the EasyPost repos to the location specified
    git -C "$1" clone https://github.com/EasyPost/easypost-php.git
    git -C "$1" clone https://github.com/EasyPost/easypost-node.git
    git -C "$1" clone https://github.com/EasyPost/easypost-ruby.git
    git -C "$1" clone https://github.com/EasyPost/easypost-python.git
    git -C "$1" clone https://github.com/EasyPost/easypost-java.git
    git -C "$1" clone https://github.com/EasyPost/easypost-csharp.git
    git -C "$1" clone https://github.com/EasyPost/easypost-go.git
}

main "$1"
