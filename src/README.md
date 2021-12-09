## Language Usage

### C#

```bash
# Change which `Main` block will be used (swap the `createShipment` for the operation you want to run)
dotnet build -p:StartupObject=csharp.createShipment -t:Rebuild

# Run the project again
EASYPOST_TEST_API_KEY=123... dotnet run
```

### Go

```bash
EASYPOST_TEST_API_KEY=123... go run create-shipment.go
```

### Java

Reference the JAR files needed to run the client library and run the script:

```bash
# https://stackoverflow.com/questions/1675765/adding-to-the-classpath-on-osx/11304846#11304846
# Optional: https://stackoverflow.com/questions/1675765/adding-to-the-classpath-on-osx/11304846#11304846

java -cp ../jars/easypost.jar:../jars/gson.jar:../jars/dotenv.jar create-shipment.java

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
venv/bin/python src/python/create-shipment.py
```

### Ruby

```bash
ruby create-shipment.rb
```

### Shell (cURL)

```bash
./create-shipment.sh
```
