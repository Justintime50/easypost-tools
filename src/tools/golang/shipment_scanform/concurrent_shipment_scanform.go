package main

import (
	"fmt"
	"os"
	"sync/atomic"
	"time"

	"github.com/EasyPost/easypost-go/v2"
)

/*
* Concurrently scanform shipments from a batch. Great for bypassing scanform errors when there are only a couple of troubled shipments in a large batch
*
* Usage: EASYPOST_TEST_API_KEY=123... BATCH=batch_123... go run concurrent_shipment_scanform.go
* Inspiration: https://stackoverflow.com/questions/33104192/how-to-run-10000-goroutines-in-parallel-where-each-routine-calls-an-api
 */

func main() {

	// Setup concurrency
	concurrency := 50 // Not to exceed "50" on EasyPost `scanform` API calls
	sem := make(chan bool, concurrency)

	// Track the time this script takes to run
	start := time.Now()
	total := int32(0)

	// Setup EasyPost API key
	apiKey := os.Getenv("EASYPOST_TEST_API_KEY")

	client := easypost.New(apiKey)

	// Retrieve a batch
	batch, err := client.GetBatch(os.Getenv("BATCH"))
	if err != nil {
		fmt.Fprintln(os.Stderr, "error retrieving batch:", err)
		os.Exit(1)
	}

	// Loop over API calls
	for i := 0; i < batch.NumShipments; i++ {
		sem <- true

		go func(current int) {
			startTime := time.Now()

			// Attempt to scanform each shipment in the batch
			_, err := client.CreateScanForm(batch.Shipments[current].ID)
			if err != nil {
				fmt.Fprintln(os.Stderr, batch.Shipments[current].ID, err)
			} else {
				fmt.Println(batch.Shipments[current].ID, "scanformed!")
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
