package main

import (
	"fmt"
	"os"
	"time"
	"sync/atomic"
	"github.com/EasyPost/easypost-go"
)

/*
* Concurrently buy EasyPost Shipments via a CSV file
*
* Usage: EASYPOST_API_KEY=123... go run concurrent_label_buy.go
* Inspiration: https://stackoverflow.com/questions/33104192/how-to-run-10000-goroutines-in-parallel-where-each-routine-calls-an-api
* CSV Format: TBD
* Rate Limiting: Do not use more than 50 goroutines, do not try CSV's larger than 2000 records, and pass Go, do not collect $200... ;)
*/

func main() {
	// Setup concurrency
	totalRequests := 1000
	concurrency := 100 // Not to exceed "100" on EasyPost `shipment` API calls
	sem := make(chan bool, concurrency)

	// Track the time this script takes to run
	start := time.Now()
	total := int32(0)

	// Make request here
	apiKey := os.Getenv("EASYPOST_API_KEY")
	if apiKey == "" {
		fmt.Fprintln(os.Stderr, "missing API key")
		os.Exit(1)
		return
	}
	client := easypost.New(apiKey)

	// Loop over API calls
	for i := 0; i < totalRequests; i++ {
		sem <- true

		go func(current int) {
			startTime := time.Now()
		
			// Create the shipment
			shipment, err := client.CreateShipment(
				&easypost.Shipment{
					ToAddress: 	&easypost.Address{
						Name:    "Bugs Bunny",
						Street1: "4000 Warner Blvd",
						City:    "Burbank",
						State:   "CA",
						Zip:     "91522",
						Phone:   "8018982020",
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
					Parcel: &easypost.Parcel{
						Length: 10.2,
						Width:  7.8,
						Height: 4.3,
						Weight: 25,
					},
					CarrierAccountIDs: []string{"ca_3bd616120603457fbed9deb1e425bbdc",},
					Service: "FEDEX_2_DAY",
					Carrier: "FedEx",
				},
			)
			if err != nil {
				fmt.Fprintln(os.Stderr, "error creating shipment:", err)
				os.Exit(1)
				return
			}

			// Buy shipment
			// shipment, err = client.BuyShipment(shipment.ID, &easypost.Rate{ID: shipment.Rates[0].ID}, "")
			// if err != nil {
			// 	fmt.Fprintln(os.Stderr, "error buying shipment:", err)
			// 	os.Exit(1)
			// 	return
			// }
			
			fmt.Println(shipment.ID)

			elapsedTime := time.Since(startTime)
			atomic.AddInt32(&total, 1)
			fmt.Printf("Request %d took %s. Requests completed: %d\n", current, elapsedTime, atomic.LoadInt32(&total))

			<-sem
		}(i)
	}

	for i := 0; i < cap(sem); i++ {
		sem <- true
	}
	elapsedTotal := time.Since(start)
	fmt.Printf("\nTotal time elapsed: %s\n", elapsedTotal)
}
