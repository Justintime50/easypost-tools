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

	// Retrieve a shipment
	shipment, err := client.GetShipment("shp_a52895d6f5a141ec87bac56e73825330")
	if err != nil {
		fmt.Fprintln(os.Stderr, "error retrieving shipment:", err)
		os.Exit(1)
		return
	}

	prettyJSON, err := json.MarshalIndent(shipment, "", "    ")
    if err != nil {
		fmt.Fprintln(os.Stderr, "error creating JSON:", err)
    }
	fmt.Printf("%s\n", string(prettyJSON))
}
