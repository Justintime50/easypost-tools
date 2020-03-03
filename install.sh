#!/bin/bash

# Use this install script to setup EasyPost Tools

# Install langs
brew install node # installs npm as a part of this
brew install ruby
brew install php
# brew install python # PHP already installs Python3 as a dependency
brew install go
brew cask install adoptopenjdk # must come before maven, will require an admin password to install
brew install maven
brew cask install dotnet-sdk

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

# Install C# deps
# https://twiki.easypo.net/do/view/APISupport/CSharpNETCoreOnMac
