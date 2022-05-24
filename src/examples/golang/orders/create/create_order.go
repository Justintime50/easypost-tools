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

	// Create an order containing multiple shipments
	order, err := client.CreateOrder(
		&easypost.Order{
			ToAddress:   &easypost.Address{ID: "adr_123..."},
			FromAddress: &easypost.Address{ID: "adr_123..."},
			Shipments: []*easypost.Shipment{
				{
					Parcel: &easypost.Parcel{
						// PredefinedPackage: "FedExBox",
						Weight: 10.2,
					},
				},
				{
					Parcel: &easypost.Parcel{
						// PredefinedPackage: "FedExBox",
						Weight: 17.5,
					},
				},
			},
		},
		&easypost.CarrierAccount{ID: "ca_123..."},
	)
	if err != nil {
		fmt.Fprintln(os.Stderr, "error creating order:", err)
		os.Exit(1)
	}

	prettyJSON, err := json.MarshalIndent(order, "", "    ")
	if err != nil {
		fmt.Fprintln(os.Stderr, "error creating JSON:", err)
	}
	fmt.Printf("%s\n", string(prettyJSON))
}
