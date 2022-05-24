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

	// Retrieve a list of batches
	batch, err := client.ListBatches(
		&easypost.ListOptions{
			// options here
		},
	)
	if err != nil {
		fmt.Fprintln(os.Stderr, "error retrieving batch:", err)
		os.Exit(1)
		return
	}

	prettyJSON, err := json.MarshalIndent(batch, "", "    ")
	if err != nil {
		fmt.Fprintln(os.Stderr, "error creating JSON:", err)
	}
	fmt.Printf("%s\n", string(prettyJSON))
}
