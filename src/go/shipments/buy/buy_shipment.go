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

	// Buy a postage label with one of the rate objects and optional insurance
	// client.BuyShipment(shipment, rate, insurance)
	shipment, err := client.BuyShipment("shp_123...", &easypost.Rate{ID: "rate_123..."}, "")
	if err != nil {
		fmt.Fprintln(os.Stderr, "error buying shipment:", err)
		os.Exit(1)
	}

	prettyJSON, err := json.MarshalIndent(shipment, "", "    ")
	if err != nil {
		fmt.Fprintln(os.Stderr, "error creating JSON:", err)
	}
	fmt.Printf("%s\n", string(prettyJSON))
}
