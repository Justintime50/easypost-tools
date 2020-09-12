VIRTUALENV := python3 -m venv

## help - Display help about make targets for this Makefile
help:
	@cat Makefile | grep '^## ' --color=never | cut -c4- | sed -e "`printf 's/ - /\t- /;'`" | column -s "`printf '\t'`" -t

## venv - Install the virtual environment
venv:
	$(VIRTUALENV) ~/.venv/easypost-tools/
	ln -snf ~/.venv/easypost-tools/ venv
	venv/bin/pip install -r requirements.txt

## install - Install the project locally for all supported languages
install: | venv
	npm install
	composer install
	bundle install
	cd src/go && go mod vendor && cd ../../ || exit
	cp .env.example .env

## clean - Remove the virtual environment and clear out .pyc files along with node_modules and vendor folders
clean:
	rm -rf ~/.venv/easypost-tools/ venv
	find . -name '*.pyc' -delete
	rm -rf dist
	rm -rf build
	rm -rf *.egg-info
	rm -rf vendor
	rm -rf node_modules
	rm -rf src/go/vendor

.PHONY: help install clean