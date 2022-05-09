using System;
using System.Threading.Tasks;
using EasyPost;
using Newtonsoft.Json;

namespace csharp
{
    class buyShipment
    {
        static async Task Main()
        {
            EasyPost.ClientManager.SetCurrent(Environment.GetEnvironmentVariable("EASYPOST_TEST_API_KEY"));

            Shipment shipment = await Shipment.Retrieve("shp_123...");
            await shipment.Buy("rate_123...");

            Console.WriteLine(JsonConvert.SerializeObject(shipment, Formatting.Indented));
        }
    }
}
