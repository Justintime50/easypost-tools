# Create Shipments via EP Libraries

All our libraries support creating shipments, housed here are simple scripts to create a shipment in each language.

## Usage

### C#

C# requires a lot of setup, see installation before running.

```bash
dotnet run
```

### Java

Java is a terrible language, don't use it. If you must use it, tell it where the JAR files are and run the script:

```bash
# Optional: https://stackoverflow.com/questions/1675765/adding-to-the-classpath-on-osx/11304846#11304846
java -cp ../jars/java-dotenv-5.1.3.jar:../jars/easypost-api-client-4.0.1.jar:../jars/gson-2.8.5.jar create-shipment.java
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
python3 create-shipment.py
```

### Ruby

Ensure that the Ruby file is executable before running.

```bash
./create-shipment.rb
```

### Curl

```bash
./create-shipment.sh
```
