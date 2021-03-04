## Language Usage

### C#

C# requires a lot of setup, see installation before running.

[EasyPost internal docs](https://twiki.easypo.net/do/view/APISupport/CSharpNETCoreOnMac).

```bash
# Change which `Main` block will be used (swap the `createShipment` for the operation you want to run)
dotnet build -p:StartupObject=csharp.createShipment -t:Rebuild

# Run the project again
EASYPOST_API_KEY=<key_here> dotnet run
```

### Go

```bash
EASYPOST_API_KEY=<key_here> go run create-shipment.go
```

### Java

Java is a terrible language, don't use it. If you must use it, tell it where the JAR files are and run the script:

```bash
# EasyPost internal docs:
# https://twiki.easypo.net/do/view/APISupport/JavaSetupOnMac
# https://stackoverflow.com/questions/1675765/adding-to-the-classpath-on-osx/11304846#11304846
# Optional: https://stackoverflow.com/questions/1675765/adding-to-the-classpath-on-osx/11304846#11304846

java -cp ../jars/easypost-api-client-4.0.1.jar:../jars/gson-2.8.5.jar:../jars/dotenv-java-1.0.2.jar create-shipment.java

# Generate a new Java project
mvn archetype:generate -DgroupId=com.justintime50.easyposttools -DartifactId=easypost-tools -DarchetypeArtifactId=maven-archetype-quickstart -DinteractiveMode=false
```

### Node

```bash
node create-shipment.js
```

### PHP

```bash
php create-shipment.php
```

### Python

```bash
# Best practice to use a virtual env
venv/bin/python src/python/create-shipment.py
```

### Ruby

Ensure that the Ruby file is executable before running.

```bash
ruby create-shipment.rb
```

### Shell (cURL)

```bash
./create-shipment.sh
```
