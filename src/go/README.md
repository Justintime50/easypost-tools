# EasyPost Go Examples

Here are Golang examples for EasyPost.

## Install

### Install EasyPost Go CL

```bash
go get -u github.com/EasyPost/easypost-go
```

### Setup Your Go Project

```bash
# Run this to init your Go project
go mod init local.com/easypost-go-examples

# Add this to your go.mod file:
require github.com/EasyPost/easypost-go v1.0.1
```

## Usage

Pass your API key as an environment variable on each call.

```bash
EASYPOST_API_KEY=<KEY HERE> go run create_address.go
```

## Learn Golang

Here are some resources on Golang:

* General: https://www.golang-book.com/books/intro
* Structs: https://medium.com/rungo/structures-in-go-76377cc106a2
* Concurrency: https://www.golang-book.com/books/intro/10
