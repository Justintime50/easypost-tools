package main

import (
	"encoding/csv"
	"fmt"
	"os"
	"strconv"
	"sync/atomic"
	"time"

	"github.com/EasyPost/easypost-go/v2"
)

/*
* Concurrently buy EasyPost Shipments via a CSV file
*
* Usage: EASYPOST_TEST_API_KEY=123... CSV=report.csv CARRIER_ACCOUNT_ID=ca_123... SERVICE=FEDEX_2_DAY CARRIER=FedEx go run concurrent_label_buy.go
* Inspiration: https://stackoverflow.com/questions/33104192/how-to-run-10000-goroutines-in-parallel-where-each-routine-calls-an-api
* CSV Format: Do not include a header row. Match up the rows with the current-line indexes below (eg: Name: lines[current][0])
* Rate Limiting: Do not use more than 50 goroutines, do not try CSV's larger than 2000 records, pass Go, do not collect $200... ;)
* TODO: Allow CSV header support (skip the first row)
 */

func main() {
	// Setup concurrency
	totalRequests := 1000 // total number of rows in the CSV file
	concurrency := 100    // Not to exceed "100" on EasyPost `shipment` API calls
	sem := make(chan bool, concurrency)

	// Track the time this script takes to run
	start := time.Now()
	total := int32(0)

	// Make request here
	apiKey := os.Getenv("EASYPOST_TEST_API_KEY")

	client := easypost.New(apiKey)

	// Open CSV file
	csvFile, _ := os.Open(os.Getenv("CSV"))
	reader := csv.NewReader(csvFile)
	defer csvFile.Close()

	lines, error := reader.ReadAll()
	if error != nil {
		fmt.Fprintln(os.Stderr, error)
		os.Exit(1)
	}

	// Loop over API calls
	for i := 0; i < totalRequests; i++ {
		sem <- true

		go func(current int) {
			startTime := time.Now()

			// Setup Parcel items
			length, _ := strconv.ParseFloat(lines[current][14], 64)
			width, _ := strconv.ParseFloat(lines[current][15], 64)
			height, _ := strconv.ParseFloat(lines[current][16], 64)
			weight, _ := strconv.ParseFloat(lines[current][17], 64)

			// Create the shipment
			shipment, err := client.CreateShipment(
				&easypost.Shipment{
					ToAddress: &easypost.Address{
						Name:    lines[current][0],
						Company: lines[current][1],
						Street1: lines[current][2],
						City:    lines[current][3],
						State:   lines[current][4],
						Zip:     lines[current][5],
						Phone:   lines[current][6],
					},
					FromAddress: &easypost.Address{
						Name:    lines[current][7],
						Company: lines[current][8],
						Street1: lines[current][9],
						City:    lines[current][10],
						State:   lines[current][11],
						Zip:     lines[current][12],
						Phone:   lines[current][13],
					},
					Parcel: &easypost.Parcel{
						Length: length,
						Width:  width,
						Height: height,
						Weight: weight,
					},
					CarrierAccountIDs: []string{os.Getenv("CARRIER_ACCOUNT_ID")},
					Service:           os.Getenv("SERVICE"),
					Carrier:           os.Getenv("CARRIER"),
				},
			)
			if err != nil {
				fmt.Fprintln(os.Stderr, "error creating shipment:", err)
			} else {
				fmt.Println(shipment.ID)
			}

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
