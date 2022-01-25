using System;
using System.Collections.Generic;
using System.Threading;
using EasyPost;
using Newtonsoft.Json;

namespace csharp
{
    class buyBatch
    {
        static void Main()
        {
            EasyPost.ClientManager.SetCurrent(Environment.GetEnvironmentVariable("EASYPOST_TEST_API_KEY"));

            // CRITERIA TO BUY A BATCH: 
            // Each of the shipments must have a parcel, a from_address, a to_address, a carrier, a service, and a carrier_accounts array

            Dictionary<string, object> fromAddress = new Dictionary<string, object>() {
                { "name", "Dr. Steve Brule" },
                { "street1", "417 Montgomery Street" },
                { "street2", "5th Floor" },
                { "city", "San Francisco" },
                { "state", "CA" },
                { "country", "US" },
                { "zip", "94104" },
                { "phone", "8018981234" }
            };

            Dictionary<string, object> toAddress = new Dictionary<string, object>() {
                { "company", "EasyPost" },
                { "street1", "417 Montgomery Street" },
                { "street2", "Floor 5" },
                { "city", "San Francisco" },
                { "state", "CA" },
                { "country", "US" },
                { "zip", "94104" },
                { "phone", "8018981234" }
            };

            Dictionary<string, object> carrierAccounts = new Dictionary<string, object>() {
                { "id", Environment.GetEnvironmentVariable("FEDEX") },
            };

            Dictionary<string, object> shipment = new Dictionary<string, object>() {
                { "parcel", new Dictionary<string, object>() {
                    { "length", 8 }, { "width", 6 }, { "height", 5 }, { "weight", 10 }
                } },
                { "to_address", toAddress },
                { "from_address", fromAddress },
                { "carrier_accounts", carrierAccounts },
                { "carrier", "FedEx" },
                { "service", "FEDEX_GROUND" }
            };

            Batch batch = Batch.Create(new Dictionary<string, object>() {
                { "shipments", new List<Dictionary<string, object>>() {
                    shipment
                } }
            });

            Thread.Sleep(2000); // Pause for creation call // TODO: This is only used for testing, find a better production approach (wait for response)
            batch.Buy();

            Console.WriteLine(JsonConvert.SerializeObject(batch, Formatting.Indented));
        }
    }
}
