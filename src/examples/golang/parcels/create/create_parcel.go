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

	// Create a parcel
	parcel, err := client.CreateParcel(
		&easypost.Parcel{
			Length: 10.2,
			Width:  7.8,
			Height: 4.3,
			Weight: 21.2,
		},
	)
	if err != nil {
		fmt.Fprintln(os.Stderr, "error creating parcel:", err)
		os.Exit(1)
	}

	prettyJSON, err := json.MarshalIndent(parcel, "", "    ")
	if err != nil {
		fmt.Fprintln(os.Stderr, "error creating JSON:", err)
	}
	fmt.Printf("%s\n", string(prettyJSON))
}
