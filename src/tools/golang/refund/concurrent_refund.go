package main

import (
	"encoding/csv"
	"fmt"
	"os"
	"sync/atomic"
	"time"

	"github.com/EasyPost/easypost-go/v2"
)

/*
* Concurrently refund EasyPost Shipments via a CSV file
*
* Usage: EASYPOST_TEST_API_KEY=123... CSV=report.csv go run concurrent_refund.go
* Inspiration: https://stackoverflow.com/questions/33104192/how-to-run-10000-goroutines-in-parallel-where-each-routine-calls-an-api
* CSV Format: Provide a single shipment ID per line in column 0 (1st column) with no other data
* Rate Limiting: Do not use more than 50 goroutines, do not try CSV's larger than 2000 records, pass Go, do not collect $200... ;)
 */

func main() {
	// Setup concurrency
	totalRequests := 1000 // total number of rows in the CSV file
	concurrency := 50     // Not to exceed "50" on EasyPost `refund` API calls
	sem := make(chan bool, concurrency)

	// Track the time this script takes to run
	start := time.Now()
	total := int32(0)

	// Setup the EasyPost API Client
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

			// request a refund for this line item
			shipment, err := client.RefundShipment(lines[current][0])
			if err != nil {
				fmt.Fprintln(os.Stderr, "error refunding shipment:", err)
			} else {
				fmt.Println("Refund requested:", shipment.ID)
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
