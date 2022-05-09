using System;
using System.Collections.Generic;
using EasyPost;
using Newtonsoft.Json;

namespace csharp
{
    class createBatch
    {
        static async void Main()
        {
            EasyPost.ClientManager.SetCurrent(Environment.GetEnvironmentVariable("EASYPOST_TEST_API_KEY"));

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

            Dictionary<string, object> shipment = new Dictionary<string, object>() {
                { "parcel", new Dictionary<string, object>() {
                    { "length", 8 }, { "width", 6 }, { "height", 5 }, { "weight", 10 }
                } },
                { "to_address", toAddress },
                { "from_address", fromAddress },
            };

            Batch batch = await Batch.Create(new Dictionary<string, object>() {
                { "shipments", new List<Dictionary<string, object>>() {
                    shipment
                } }
            });

            Console.WriteLine(JsonConvert.SerializeObject(batch, Formatting.Indented));
        }
    }
}
