# EasyPost API Tools

My personal EasyPost API tools.

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

```bash
# Install libraries
./get-libraries/clone.sh

# Install Python deps
pip3 install python-dotenv
pip3 install easypost

# Install Node deps
npm install dotenv
npm i @easypost/api

# Install Ruby deps
gem install easypost

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
brew cask install dotnet
dotnet new console # from project folder
dotnet add package EasyPost-Official
dotnet add package Newtonsoft.Json --version 12.0.3
```

### Addresses

Interact with the `Addresses` endpoint. View [README](/addresses/README.md).

### Get Libraries

Easily clone or pull all the officially supported EasyPost API libraries. View [README](/get-libraries/README.md).

### Parcels

Interact with the `Parcels` endpoint. View [README](/parcels/README.md).

### Playground

Mess with experimental scripts. View [README](/playground/README.md).

### Recreate

Recreate API calls as if you were a customer. View [README](/recreate/README.md).

### Scripts

A collection of shell scripts helpful for EasyPost API troubleshooting. View [README](/addresses/README.md).

### Shipments

Easily create shipments with all our supported client libraries and languages. View [README](/shipments/README.md).
