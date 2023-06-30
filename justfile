PYTHON_BINARY := "python3"
VIRTUAL_ENV := "venv"
VIRTUAL_BIN := VIRTUAL_ENV / "bin"

# Install the project locally for all supported languages with their dependencies
install: install-python install-golang install-node install-php install-shell

# Install the Python dependencies and virtual env
install-python:
    {{PYTHON_BINARY}} -m venv {{VIRTUAL_ENV}}
    {{VIRTUAL_BIN}}/pip install -e ."[dev]"

# Install the Golang dependencies
install-golang:
    cd src/tools/golang && go mod vendor && cd ../../../ || exit 1

# Install the node dependencies
install-node:
    npm install

# Install (update) the PHP dependencies
install-php:
    composer update

# Install the Shell dependencies
install-shell:
    brew install shellcheck || exit 0

# Remove the virtual environment and clear out .pyc files along with node_modules and vendor folders
clean: clean-python clean-golang clean-node clean-php

# Cleans the Python environment
clean-python:
    rm -rf {{VIRTUAL_ENV}} dist *.egg-info .coverage
    find . -name '*.pyc' -delete

# Cleans the Go environment
clean-golang:
    rm -rf src/examples/golang/vendor src/tools/golang/vendor

# Cleans the Node environment
clean-node:
    rm -rf node_modules

# Cleans the PHP environment
clean-php:
    rm -rf vendor bin

# Lint the entire project across all languages
lint: lint-python lint-golang lint-node lint-php lint-shell lint-html

# Lints the Python files
lint-python:
    venv/bin/flake8 src/tools/python

# Lints the Golang files
lint-golang:
    cd src/tools/golang && golangci-lint run && cd ../../../ || exit 1

# Lints the node files
lint-node:
    npx eslint --ignore-pattern 'node_modules' --ignore-pattern 'coverage' src/tools/node

# Lints the PHP files
lint-php:
    composer lint

# Lints the Shell files
lint-shell:
    find src/tools/shell -type f \( -name '*.sh' \}} | xargs shellcheck

# Lints the HTML files
lint-html:
    npx htmlhint src/tools/html/trimmer
    npx htmlhint src/tools/html/wincurl
