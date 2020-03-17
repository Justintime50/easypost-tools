package main

import (
	"fmt"
	"os"
	"encoding/json"
	"github.com/EasyPost/easypost-go"
)

func main() {
	apiKey := os.Getenv("EASYPOST_API_KEY")
	if apiKey == "" {
		fmt.Fprintln(os.Stderr, "missing API key")
		os.Exit(1)
		return
	}
	client := easypost.New(apiKey)

	// Retrieve an address by ID
	address, err := client.ListAddresses(
		&easypost.ListOptions{
			// options here
		},
	)
	if err != nil {
		fmt.Fprintln(os.Stderr, "error retrieving address:", err)
		os.Exit(1)
		return
	}

	prettyJSON, err := json.MarshalIndent(address, "", "    ")
    if err != nil {
		fmt.Fprintln(os.Stderr, "error creating JSON:", err)
    }
	fmt.Printf("%s\n", string(prettyJSON))
}
