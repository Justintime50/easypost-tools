package main

import (
	"encoding/json"
	"fmt"
	"os"

	"github.com/EasyPost/easypost-go/v2"
)

func main() {
	apiKey := os.Getenv("EASYPOST_TEST_API_KEY")

	client := easypost.New(apiKey)

	// Create scanform
	toAddress, err := client.CreateScanForm(
		"shp_123...",
		"shp_123...",
	)
	if err != nil {
		fmt.Fprintln(os.Stderr, "error creating to address:", err)
		os.Exit(1)
	}

	prettyJSON, err := json.MarshalIndent(toAddress, "", "    ")
	if err != nil {
		fmt.Fprintln(os.Stderr, "error creating JSON:", err)
	}
	fmt.Printf("%s\n", string(prettyJSON))
}
