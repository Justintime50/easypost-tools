#!/bin/bash

# Pull any changes from each repo in the archive if enabled
# USAGE: ./pull-client-libraries.sh ~/my_parent_folder

main() {
    echo "Pulling existing repos..."
    iterate_git_repos "$1"
    echo "Repos pulled!"
}

iterate_git_repos() {
    # Iterate over each repo and pull changes
    local dir
    for dir in "$1"/*/ ; do
        git -C "$dir" pull origin master
    done
}

main "$1"
