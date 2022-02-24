PYTHON_BINARY := python3
VIRTUAL_ENV := venv
VIRTUAL_BIN := $(VIRTUAL_ENV)/bin

## help - Display help about make targets for this Makefile
help:
	@cat Makefile | grep '^## ' --color=never | cut -c4- | sed -e "`printf 's/ - /\t- /;'`" | column -s "`printf '\t'`" -t

## install - Install the project locally for all supported languages with their dependencies
install: | install-python install-golang install-node install-php install-ruby install-shell install-csharp install-java

## install-python - Install the Python dependencies and virtual env
install-python:
	$(PYTHON_BINARY) -m venv $(VIRTUAL_ENV)
	$(VIRTUAL_BIN)/pip install -e ."[dev]"

## install-golang - Install the Golang dependencies
install-golang:
	cd src/examples/golang && go mod vendor && cd ../../../ || exit 1
	cd src/tools/golang && go mod vendor && cd ../../../ || exit 1

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
	brew install shellcheck || exit 0

## install-csharp - Install the C# dependencies
install-csharp:
	dotnet tool install -g dotnet-format || exit 0
	cd src/examples/csharp && dotnet restore && cd ../../../ || exit 1
	cd src/examples/csharp && dotnet build -p:StartupObject=csharp.createShipment -t:Rebuild && cd ../../../ || exit 1

## install-java - Install the Java dependencies
install-java:
	mkdir -p src/examples/java/jars
	curl -LJs "https://search.maven.org/remotecontent?filepath=com/easypost/easypost-api-client/5.0.0/easypost-api-client-5.0.0.jar" -o src/examples/java/jars/easypost.jar
	curl -LJs "https://search.maven.org/remotecontent?filepath=com/google/code/gson/gson/2.8.6/gson-2.8.6.jar" -o src/examples/java/jars/gson.jar
	curl -LJs "https://search.maven.org/remotecontent?filepath=io/github/cdimascio/dotenv-java/2.2.0/dotenv-java-2.2.0.jar" -o src/examples/java/jars/dotenv.jar
	curl -LJs "https://github.com/checkstyle/checkstyle/releases/download/checkstyle-8.42/checkstyle-8.42-all.jar" -o src/examples/java/jars/checkstyle.jar
	curl -LJs "https://raw.githubusercontent.com/checkstyle/checkstyle/master/src/main/resources/google_checks.xml" -o src/examples/java/jars/google_checks.xml

## clean - Remove the virtual environment and clear out .pyc files along with node_modules and vendor folders
clean: | clean-python clean-golang clean-node clean-php clean-csharp clean-java

## clean-python - Cleans the Python environment
clean-python:
	rm -rf $(VIRTUAL_ENV)
	find . -name '*.pyc' -delete
	rm -rf dist
	rm -rf build
	rm -rf *.egg-info

## clean-golang - Cleans the Go environment
clean-golang:
	rm -rf src/examples/golang/vendor
	rm -rf src/tools/golang/vendor

## clean-node - Cleans the Node environment
clean-node:
	rm -rf node_modules

## clean-php - Cleans the PHP environment
clean-php:
	rm -rf vendor
	rm -rf bin

## clean-csharp - Cleans the C# environment
clean-csharp:
	rm -rf src/examples/csharp/bin

## clean-java - Cleans the Java environment
clean-java:
	rm -rf src/examples/java/jars

## lint - Lint the entire project across all languages
lint: | lint-python lint-golang lint-node lint-php lint-ruby lint-shell lint-csharp lint-html lint-java

## lint-python - Lints the Python files
lint-python:
	venv/bin/flake8 src/examples/python
	venv/bin/flake8 src/tools/python

## lint-golang - Lints the Golang files
lint-golang:
	cd src/examples/golang && golangci-lint run && cd ../../../ || exit 1
	cd src/tools/golang && golangci-lint run && cd ../../../ || exit 1

## lint-node - Lints the node files
lint-node:
	npx eslint --ignore-pattern 'node_modules' --ignore-pattern 'coverage' src/examples/node
	npx eslint --ignore-pattern 'node_modules' --ignore-pattern 'coverage' src/tools/node

## lint-php - Lints the PHP files
lint-php:
	composer lint

## lint-ruby - Lints the Ruby files
lint-ruby:
	rubocop

## lint-shell - Lints the Shell files
lint-shell:
	find src/examples/shell -type f \( -name '*.sh' \) | xargs shellcheck
	find src/tools/shell -type f \( -name '*.sh' \) | xargs shellcheck

## lint-csharp - Lints the C# files
lint-csharp:
	dotnet-format src/examples/csharp

## lint-html - Lints the HTML files
lint-html:
	npx htmlhint src/tools/html/trimmer
	npx htmlhint src/tools/html/wincurl

## lint-java - Lints the Java files
lint-java:
	java -jar src/examples/java/jars/checkstyle.jar src/examples/java -c src/examples/java/jars/google_checks.xml

.PHONY: help install clean lint
