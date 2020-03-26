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

	// Retrieve a parcel
	parcel, err := client.GetParcel("prcl_7826f54922b04012894d774d462b8d21")
	if err != nil {
		fmt.Fprintln(os.Stderr, "error retrieving parcel:", err)
		os.Exit(1)
		return
	}

	prettyJSON, err := json.MarshalIndent(parcel, "", "    ")
    if err != nil {
		fmt.Fprintln(os.Stderr, "error creating JSON:", err)
    }
	fmt.Printf("%s\n", string(prettyJSON))
}
