using System;
using System.Collections.Generic;
using EasyPost;
using Newtonsoft.Json;

namespace csharp
{
    class createInsurance
    {
        static void Main()
        {
            EasyPost.ClientManager.SetCurrent(Environment.GetEnvironmentVariable("EASYPOST_TEST_API_KEY"));

            Dictionary<string, object> fromAddress = new Dictionary<string, object>() {
                { "company", "Simpler Postage Inc" },
                { "street1", "164 Townsend St" },
                { "street2", "Unit 1" },
                { "city", "San Francisco" },
                { "state", "CA" },
                { "zip", "94107" },
                { "country", "US" }
            };

            Dictionary<string, object> toAddress = new Dictionary<string, object>() {
                { "company", "The White House" },
                { "street1", "1600 Pennsylvania Avenue NW" },
                { "street2", "DC 20500" },
                { "city", "Washington" },
                { "state", "DC" },
                { "zip", "20500" },
                { "country", "US" }
            };

            Dictionary<string, object> parcel = new Dictionary<string, object>() {
                { "weight", 8.0 }
            };

            Shipment shipment = Shipment.Create(new Dictionary<string, object>() {
                { "from_address", fromAddress },
                { "to_address", toAddress },
                { "parcel", parcel },
                { "service", "First" },
            });

            Insurance insurance = Insurance.Create(new Dictionary<string, object>() {
                { "to_address", toAddress },
                { "from_address", fromAddress },
                { "tracking_code", shipment.tracking_code },
                { "amount", "100.00" },
                { "carrier", "USPS" }
            });

            Console.WriteLine(JsonConvert.SerializeObject(insurance, Formatting.Indented));
        }
    }
}
