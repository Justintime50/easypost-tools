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
		return
	}
	client := easypost.New(apiKey)

	order, err := client.CreateOrder(
		&easypost.Order{
			ToAddress:   &easypost.Address{ID: "adr_35996e8fcfba4104b7f0c66ba0b314e6"},
			FromAddress: &easypost.Address{ID: "adr_35996e8fcfba4104b7f0c66ba0b314e6"},
			Shipments: []*easypost.Shipment{
				&easypost.Shipment{
					Parcel: &easypost.Parcel{
						// PredefinedPackage: "FedExBox",
						Weight: 10.2,
					},
				},
				&easypost.Shipment{
					Parcel: &easypost.Parcel{
						// PredefinedPackage: "FedExBox",
						Weight: 17.5,
					},
				},
			},
		},
		&easypost.CarrierAccount{ID: "ca_3bd616120603457fbed9deb1e425bbdc"},
	)
	if err != nil {
		fmt.Fprintln(os.Stderr, "error creating order:", err)
		os.Exit(1)
		return
	}

	prettyJSON, err := json.MarshalIndent(order, "", "    ")
	if err != nil {
		fmt.Fprintln(os.Stderr, "error creating JSON:", err)
	}
	fmt.Printf("%s\n", string(prettyJSON))
}
