# EasyPost API Tools

My personal EasyPost API tools.

All tools are intended to be used with .env files where possible.

## Install

Install EasyPost Tools:

```bash
./install.sh
```

Setup environment file with API keys:

```bash
cp .env.example .env
```

### Manual Install

Install all supported languages:

```bash
brew install node # installs npm as a part of this
brew install ruby
brew install php
# brew install python # PHP already installs Python3 as a dependency
brew install go
brew cask install adoptopenjdk # must come before maven, will require an admin password to install
brew install maven
brew cask install dotnet-sdk
```

Install project dependencies:

```bash
# Install libraries
./get-libraries/clone.sh

# Install PHP deps
composer require vlucas/phpdotenv
composer require easypost/easypost-php
# Change the autoload dir in the composer.json file in the vendor folder for the phpdotenv project

# Install Python deps
pip3 install python-dotenv
pip3 install easypost

# Install Node deps
npm install dotenv
npm i @easypost/api

# Install Ruby deps
gem install dotenv
gem install easypost
gem install awesome_print

# Install Java deps
# https://twiki.easypo.net/do/view/APISupport/JavaSetupOnMac
# https://stackoverflow.com/questions/1675765/adding-to-the-classpath-on-osx/11304846#11304846
brew cask install adoptopenjdk # must come before maven, will require an admin password to install
brew install maven

# Make sure to include the following configuration block in the pom.xml file for Java:
<plugin> 
    <groupId>org.apache.maven.plugins</groupId> 
    <artifactId>maven-javadoc-plugin</artifactId> 
    <configuration> 
        <source>8</source> 
    </configuration> 
    ... 
</plugin> 

# Install C# deps
# https://twiki.easypo.net/do/view/APISupport/CSharpNETCoreOnMac
brew cask install dotnet-sdk
dotnet new console # initialize project from project folder
dotnet add package EasyPost-Official
dotnet add package Newtonsoft.Json --version 12.0.3
```

## Tools

### Addresses

Interact with the `Addresses` endpoint. View [README](/addresses/README.md).

### Get Libraries

Easily clone or pull all the officially supported EasyPost API libraries. View [README](/get-libraries/README.md).

### Parcels

Interact with the `Parcels` endpoint. View [README](/parcels/README.md).

### Playground

Mess with experimental scripts. View [README](/playground/README.md).

### Pretty

Take unformatted JSON and prettify it. Enter your JSON and run the following:

```bash
node prettify.js
```

### Recreate

Recreate API calls as if you were a customer. View [README](/recreate/README.md).

### Scripts

A collection of shell scripts helpful for EasyPost API troubleshooting. View [README](/addresses/README.md).

### Shipments

Easily create shipments with all our supported client libraries and languages. View [README](/shipments/README.md).

## Other Tools

### Dummy Address Data

There is a library which has thousands of dummy verified addresses. View the project [here](https://github.com/EthanRBrown/rrad).
