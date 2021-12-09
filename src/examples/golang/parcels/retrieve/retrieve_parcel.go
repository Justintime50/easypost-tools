package main

import (
	"encoding/json"
	"fmt"
	"os"

	"github.com/EasyPost/easypost-go"
)

func main() {
	apiKey := os.Getenv("EASYPOST_TEST_API_KEY")
	if apiKey == "" {
		fmt.Fprintln(os.Stderr, "missing API key")
		os.Exit(1)
	}
	client := easypost.New(apiKey)

	// Retrieve a parcel
	parcel, err := client.GetParcel("prcl_123...")
	if err != nil {
		fmt.Fprintln(os.Stderr, "error retrieving parcel:", err)
		os.Exit(1)
	}

	prettyJSON, err := json.MarshalIndent(parcel, "", "    ")
	if err != nil {
		fmt.Fprintln(os.Stderr, "error creating JSON:", err)
	}
	fmt.Printf("%s\n", string(prettyJSON))
}
