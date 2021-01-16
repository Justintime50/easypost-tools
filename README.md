<div align="center">

# EasyPost Tools

A MASSIVE collection of tools for [EasyPost](https://www.easypost.com/docs/api/) spanning over C#, Golang, Node, PHP, Python, Ruby, HTML, and Shell.

[![Build Status](https://travis-ci.com/Justintime50/easypost-tools.svg?branch=master)](https://travis-ci.com/Justintime50/easypost-tools)
[![Licence](https://img.shields.io/github/license/justintime50/easypost-tools)](LICENSE)

</div>

All tools are intended to be used with an `.env` file or environment variables where possible.

## Install

Install EasyPost Tools and all their dependencies for each language. **Note:** This installer assumes you have each language and it's associated package manager setup before running.

```bash
make install

# Setup an environment file with API keys and carrier accounts.
cp .env.example .env
```

## Usage

Each language has its own quirks and usage. See the [Language README](src/README.md) for more information.

## Development

```bash
# Lint the project
make lint

# Clean the project and all dependencies across languages
make clean
```

## Other Resources

* [International Shipping Guide](https://easypost.zendesk.com/hc/en-us/articles/360042847751-Customs-Shipping-Internationally#h_de80a46f-53c2-447d-9617-6544aa915304)
* [Joshua's Toolkit](https://easypost-support-api-tool.herokuapp.com/)

## Attribution

* Some of the Python scripts were provided by [roehnan](https://github.com/roehnan), a coworker of mine at EasyPost and are attributed as such in the script
