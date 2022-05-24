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

	// Create and verify addresses
	toAddress, err := client.CreateAddress(
		&easypost.Address{
			Name:    "Bugs Bunny",
			Street1: "4000 Warner Blvd",
			City:    "Burbank",
			State:   "CA",
			Zip:     "91522",
			Phone:   "8018982020",
		},
		&easypost.CreateAddressOptions{Verify: []string{"delivery"}},
	)
	if err != nil {
		fmt.Fprintln(os.Stderr, "error creating to address:", err)
		os.Exit(1)
	}

	fromAddress, err := client.CreateAddress(
		&easypost.Address{
			Company: "EasyPost",
			Street1: "One Montgomery St",
			Street2: "Ste 400",
			City:    "San Francisco",
			State:   "CA",
			Zip:     "94104",
			Phone:   "415-555-1212",
		},
		&easypost.CreateAddressOptions{Verify: []string{"delivery"}},
	)
	if err != nil {
		fmt.Fprintln(os.Stderr, "error creating from address:", err)
		os.Exit(1)
	}

	// Create a parcel
	parcel, err := client.CreateParcel(
		&easypost.Parcel{
			Length: 10.2,
			Width:  7.8,
			Height: 4.3,
			Weight: 25,
		},
	)
	if err != nil {
		fmt.Fprintln(os.Stderr, "error creating parcel:", err)
		os.Exit(1)
	}

	// Create a customs_info form for international shipments
	customsItem, err := client.CreateCustomsItem(
		&easypost.CustomsItem{
			Description:    "EasyPost t-shirts",
			HSTariffNumber: "123456",
			OriginCountry:  "US",
			Quantity:       2,
			Value:          96.27,
			Weight:         21.1,
		},
	)
	if err != nil {
		fmt.Fprintln(os.Stderr, "error creating customs item:", err)
		os.Exit(1)
	}

	customsInfo, err := client.CreateCustomsInfo(
		&easypost.CustomsInfo{
			CustomsCertify:    true,
			CustomsSigner:     "Wile E. Coyote",
			ContentsType:      "gift",
			EELPFC:            "NOEEI 30.37(a)",
			NonDeliveryOption: "return",
			RestrictionType:   "none",
			CustomsItems:      []*easypost.CustomsItem{customsItem},
		},
	)
	if err != nil {
		fmt.Fprintln(os.Stderr, "error creating customs info:", err)
		os.Exit(1)
	}

	// Create the shipment
	shipment, err := client.CreateShipment(
		&easypost.Shipment{
			ToAddress:         toAddress,
			FromAddress:       fromAddress,
			Parcel:            parcel,
			CarrierAccountIDs: []string{"ca_123..."},
			CustomsInfo:       customsInfo,
		},
	)
	if err != nil {
		fmt.Fprintln(os.Stderr, "error creating shipment:", err)
		os.Exit(1)
	}

	// Buy a postage label with one of the rate objects and optional insurance
	// shipment, err = client.BuyShipment(shipment.ID, &easypost.Rate{ID: shipment.Rates[0].ID}, "")
	// if err != nil {
	// 	fmt.Fprintln(os.Stderr, "error buying shipment:", err)
	// 	os.Exit(1)
	// }

	prettyJSON, err := json.MarshalIndent(shipment, "", "    ")
	if err != nil {
		fmt.Fprintln(os.Stderr, "error creating JSON:", err)
	}
	fmt.Printf("%s\n", string(prettyJSON))
}
