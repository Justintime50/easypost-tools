VIRTUALENV := python3 -m venv

## help - Display help about make targets for this Makefile
help:
	@cat Makefile | grep '^## ' --color=never | cut -c4- | sed -e "`printf 's/ - /\t- /;'`" | column -s "`printf '\t'`" -t

## venv - Install the Python virtual environment
venv:
	$(VIRTUALENV) ~/.venv/easypost-tools/
	ln -snf ~/.venv/easypost-tools/ venv
	venv/bin/pip install -r requirements.txt

## install - Install the project locally for all supported languages with their dependencies
install: | venv install-go install-node install-php install-ruby install-shell install-csharp

## install-go - Install the Golang dependencies
install-go:
	cd src/go && go mod vendor && cd ../../ || exit 1

## install-node - Install the node dependencies
install-node:
	npm install

## install-php - Install (update) the PHP dependencies
install-php:
	composer update

## install-ruby - Install the Ruby dependencies
install-ruby:
	bundle install

## install-shell - Install the Shell dependencies
install-shell:
	brew install shellcheck

## install-csharp - Install the C# dependencies
install-csharp:
	dotnet tool install -g dotnet-format
	cd src/csharp && dotnet build -p:StartupObject=csharp.createShipment -t:Rebuild && cd ../../ || exit 1

## clean - Remove the virtual environment and clear out .pyc files along with node_modules and vendor folders
clean: | clean-python clean-go clean-node clean-php clean-csharp

## clean-python - Cleans the Python environment
clean-python:
	rm -rf ~/.venv/easypost-tools/ venv
	find . -name '*.pyc' -delete
	rm -rf dist
	rm -rf build
	rm -rf *.egg-info

## clean-go - Cleans the Go environment
clean-go:
	rm -rf src/go/vendor

## clean-node - Cleans the Node environment
clean-node:
	rm -rf node_modules

## clean-php - Cleans the PHP environment
clean-php:
	rm -rf vendor
	rm -rf bin

## clean-csharp - Cleans the C# environment
clean-csharp:
	rm -rf src/csharp/bin

## lint - Lint the entire project across all languages
lint: | lint-python lint-go lint-node lint-php lint-ruby lint-shell

## lint-python - Lints the Python files
lint-python:
	venv/bin/flake8 src/python

## lint-go - Lints the Golang files
lint-go:
	cd src/go && golangci-lint run && cd ../../ || exit 1

## lint-node - Lints the node files
lint-node:
	npx eslint --ignore-pattern 'node_modules' --ignore-pattern 'coverage' src/node

## lint-php - Lints the PHP files
lint-php:
	./bin/phplint ./src/php

## lint-ruby - Lints the Ruby files
lint-ruby:
	rubocop

## lint-shell - Lints the Shell files
lint-shell:
	find src/shell -type f \( -name '*.sh' \) | xargs shellcheck

## lint-csharp - Lints C# files
lint-csharp:
	dotnet-format src/csharp

.PHONY: help install clean lint
