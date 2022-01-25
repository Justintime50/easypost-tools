using System;
using EasyPost;
using Newtonsoft.Json;

namespace csharp
{
    class buyShipment
    {
        static void Main()
        {
            EasyPost.ClientManager.SetCurrent(Environment.GetEnvironmentVariable("EASYPOST_TEST_API_KEY"));

            Shipment shipment = Shipment.Retrieve("shp_123...");
            shipment.Buy("rate_123...");

            Console.WriteLine(JsonConvert.SerializeObject(shipment, Formatting.Indented));
        }
    }
}
