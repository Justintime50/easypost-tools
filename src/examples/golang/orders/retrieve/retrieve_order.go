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

	// Retrieve an order
	order, err := client.GetOrder("order_123...")
	if err != nil {
		fmt.Fprintln(os.Stderr, "error retrieving order:", err)
		os.Exit(1)
	}

	prettyJSON, err := json.MarshalIndent(order, "", "    ")
	if err != nil {
		fmt.Fprintln(os.Stderr, "error creating JSON:", err)
	}
	fmt.Printf("%s\n", string(prettyJSON))
}
