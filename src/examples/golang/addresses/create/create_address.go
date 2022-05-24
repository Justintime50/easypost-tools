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

	// Create and verify an address
	address, err := client.CreateAddress(
		&easypost.Address{
			Name:    "Bugs Bunny",
			Street1: "4000 Warner Blvd",
			City:    "Burbank",
			State:   "CA",
			Zip:     "91522",
		},
		&easypost.CreateAddressOptions{Verify: []string{"delivery"}},
	)
	if err != nil {
		fmt.Fprintln(os.Stderr, "error creating address:", err)
		os.Exit(1)
	}

	prettyJSON, err := json.MarshalIndent(address, "", "    ")
	if err != nil {
		fmt.Fprintln(os.Stderr, "error creating JSON:", err)
	}
	fmt.Printf("%s\n", string(prettyJSON))
}
