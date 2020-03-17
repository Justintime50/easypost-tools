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

	// buy postage label with one of the rate objects
	// client.BuyShipment(shipment, rate, insurance)
	shipment, err := client.BuyShipment("shp_a52895d6f5a141ec87bac56e73825330", &easypost.Rate{ID: "rate_588b263a7a9449c986efdcf01b7821c7"}, "")
	if err != nil {
		fmt.Fprintln(os.Stderr, "error buying shipment:", err)
		os.Exit(1)
		return
	}

	prettyJSON, err := json.MarshalIndent(shipment, "", "    ")
    if err != nil {
		fmt.Fprintln(os.Stderr, "error creating JSON:", err)
    }
	fmt.Printf("%s\n", string(prettyJSON))
}
