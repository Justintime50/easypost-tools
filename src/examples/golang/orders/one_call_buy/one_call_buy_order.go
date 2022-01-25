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

	// Create an order containing multiple shipments
	order, err := client.CreateOrder(
		&easypost.Order{
			ToAddress: &easypost.Address{
				Company: "EasyPost",
				Street1: "One Montgomery St",
				Street2: "Ste 400",
				City:    "San Francisco",
				State:   "CA",
				Zip:     "94104",
				Phone:   "415-555-1212",
			},
			FromAddress: &easypost.Address{
				Company: "EasyPost",
				Street1: "One Montgomery St",
				Street2: "Ste 400",
				City:    "San Francisco",
				State:   "CA",
				Zip:     "94104",
				Phone:   "415-555-1212",
			},
			Shipments: []*easypost.Shipment{
				{
					Parcel: &easypost.Parcel{
						Length: 10.2,
						Width:  7.8,
						Height: 4.3,
						Weight: 25,
					},
				},
			},
			Service: "FEDEX_GROUND",
		},
		&easypost.CarrierAccount{ID: os.Getenv("FEDEX")},
	)
	if err != nil {
		fmt.Fprintln(os.Stderr, "error one-call buying order:", err)
		os.Exit(1)
	}

	prettyJSON, err := json.MarshalIndent(order, "", "    ")
	if err != nil {
		fmt.Fprintln(os.Stderr, "error creating JSON:", err)
	}
	fmt.Printf("%s\n", string(prettyJSON))
}
