using System;
using System.Collections.Generic;
using EasyPost;
using Newtonsoft.Json;

namespace create_address
{
    class createAddress
    {
        static void Main(string[] args)
        {
            EasyPost.ClientManager.SetCurrent(Environment.GetEnvironmentVariable("EASYPOST_API_KEY"));

            Address address = Address.Create(
                new Dictionary<string, object>() {
                    { "street1", "417 MONTGOMERY ST" },
                    { "street2", "FLOOR 5" },
                    { "city", "SAN FRANCISCO" },
                    { "state", "CA" },
                    { "zip", "94104" },
                    { "country", "US" },
                    { "company", "EasyPost" },
                    { "phone", "415-123-4567" }
                }
            );

            Console.WriteLine(JsonConvert.SerializeObject(address, Formatting.Indented));
        }
    }
}
