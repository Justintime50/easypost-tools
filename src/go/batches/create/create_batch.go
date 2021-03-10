package main

import (
	"encoding/json"
	"fmt"
	"os"

	"github.com/EasyPost/easypost-go"
)

func main() {
	apiKey := os.Getenv("EASYPOST_API_KEY")
	if apiKey == "" {
		fmt.Fprintln(os.Stderr, "missing API key")
		os.Exit(1)
	}
	client := easypost.New(apiKey)

	// Create a batch
	batch, err := client.CreateBatch(
		&easypost.Shipment{ID: "shp_123..."},
		// &easypost.Shipment{ID: "shp_123..."},
		// &easypost.Shipment{ID: "shp_123..."},
	)
	if err != nil {
		fmt.Fprintln(os.Stderr, "error creating batch:", err)
		os.Exit(1)
	}

	prettyJSON, err := json.MarshalIndent(batch, "", "    ")
	if err != nil {
		fmt.Fprintln(os.Stderr, "error creating JSON:", err)
	}
	fmt.Printf("%s\n", string(prettyJSON))
}
