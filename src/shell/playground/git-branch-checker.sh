#!/bin/bash

# Prints the local branches of your git repos to console. Perfect for helping clean up
# USAGE: git-branch-checker.sh "$HOME/git"

main() {
    echo "Getting branches of each project"
    check_git_branches "$1"
}

check_git_branches() {
    cd "$1" || exit 1
    for DIR in */ ; do
        printf '%s\n' "$DIR"
        cd "$DIR" && git branch
        cd .. || exit
    done
}

main "$1"
