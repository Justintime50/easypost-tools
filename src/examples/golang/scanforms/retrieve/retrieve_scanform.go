package main

import (
	"encoding/json"
	"fmt"
	"os"

	"github.com/EasyPost/easypost-go/v2"
)

func main() {
	apiKey := os.Getenv("EASYPOST_TEST_API_KEY")
	if apiKey == "" {
		fmt.Fprintln(os.Stderr, "missing API key")
		os.Exit(1)
	}
	client := easypost.New(apiKey)

	// Retrieve an scanform
	scanform, err := client.GetScanForm("sf_123...")
	if err != nil {
		fmt.Fprintln(os.Stderr, "error retrieving scanform:", err)
		os.Exit(1)
	}

	prettyJSON, err := json.MarshalIndent(scanform, "", "    ")
	if err != nil {
		fmt.Fprintln(os.Stderr, "error creating JSON:", err)
	}
	fmt.Printf("%s\n", string(prettyJSON))
}
