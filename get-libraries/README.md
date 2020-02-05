# Clone the EasyPost Libraries

Easily clone or pull the official EasyPost libraries.

Using the `clone.sh` script is great for a new machine or employee. Using the `pull.sh` script via Launch Agent or Cron is perfect to automate pulling in changes daily.

## Usage

Edit the `LOCATION` variable in the `.env` file and run the script.

### Cloning Libraries

Using the following command will clone all EP libraries:

```bash
./clone.sh
```

### Pulling Libraries

Using the following command will pull any changes from all EP libraries:

```bash
./pull.sh
```

## Launch Agent

Edit the path in the plist file to your script and logs, then setup the Launch Agent which will pull any changes to the libraries upon login:

```bash
# Copy the plist to the Launch Agent directory
cp local.pullEasyPostLibraries.plist ~/Library/LaunchAgents

# Use `load/unload` to add/remove the script as a Launch Agent
launchctl load ~/Library/LaunchAgents/local.pullEasyPostLibraries.plist

# To `start/stop` the script from running, use the following
launchctl start local.pullEasyPostLibraries.plist
```
