<div align="center">

# EasyPost Tools

A large collection of supplemental tools for the EasyPost API spanning various programming languages.

[![Build Status](https://github.com/Justintime50/easypost-tools/workflows/build/badge.svg)](https://github.com/Justintime50/easypost-tools/actions)
[![Licence](https://img.shields.io/github/license/Justintime50/easypost-tools)](LICENSE)

<img src="https://raw.githubusercontent.com/Justintime50/assets/main/src/easypost-tools/showcase.png" alt="Showcase">

</div>

This project aims to supplement the resources available at <https://easypost.com> by providing additional examples, tooling, and references outside the EasyPost open source client libraries and API docs, to help you get up and running on the EasyPost platform faster or solve problems that the EasyPost API doesn't natively cover.

## Install

```bash
# Install EasyPost Tools and all their dependencies for each language (assumes package managers are already setup)
just install

# Alternatively you could install the tools for a single language
just install-python

# Setup an environment file with API keys and carrier accounts.
cp .env-example .env
```

## Usage

**NOTE:** All tools are intended to be used with an `.env` file or environment variables where possible.

Each language has its own quirks and usage. See the [Language README](src/README.md) for more information.

## Development

```bash
# Get a comprehensive list of development tools
just --list
```

## Other Resources

* [EasyPost Examples](https://github.com/easypost/examples) - a collection of over 700+ code examples for the EasyPost API
* [International Shipping Guide](https://easypost.zendesk.com/hc/en-us/articles/360042847751-Customs-Shipping-Internationally#h_de80a46f-53c2-447d-9617-6544aa915304)

### External Tools

* [DAD (Dummy Address Data)](https://github.com/Justintime50/dad)
  * [DAD Python](https://github.com/Justintime50/dad-python)
  * [DAD Node](https://github.com/Justintime50/dad-node)
* [Labelary](https://github.com/Justintime50/labelary)
* [EasyPost CLI](https://github.com/Justintime50/easypost-cli)
* [EasyPost Tools UI](https://github.com/Justintime50/easypost-tools-ui)

## Attribution

* Some of the Python scripts were provided by [roehnan](https://github.com/roehnan), an ex-coworker of mine at EasyPost and are attributed as such in each file
