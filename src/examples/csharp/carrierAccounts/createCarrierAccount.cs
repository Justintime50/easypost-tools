using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using EasyPost;
using Newtonsoft.Json;

namespace csharp
{
    class createCarrierAccount
    {
        static async Task Main()
        {
            EasyPost.ClientManager.SetCurrent(Environment.GetEnvironmentVariable("EASYPOST_PROD_API_KEY"));

            Dictionary<string, object> credentials = new Dictionary<string, object>() {
                { "account_number", "A1A1A1" },
                { "user_id", "USERID" },
                { "password", "PASSWORD" },
                { "access_license_number", "ALN" }
            };

            CarrierAccount account = await CarrierAccount.Create(new Dictionary<string, object>() {
                { "type", "UpsAccount" },
                { "description", "description" },
                { "credentials", credentials }
            });

            Console.WriteLine(JsonConvert.SerializeObject(account, Formatting.Indented));
        }
    }
}
