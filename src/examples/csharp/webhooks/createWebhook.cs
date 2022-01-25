using System;
using System.Collections.Generic;
using EasyPost;
using Newtonsoft.Json;

namespace csharp
{
    class createWebhook
    {
        static void Main()
        {
            EasyPost.ClientManager.SetCurrent(Environment.GetEnvironmentVariable("EASYPOST_TEST_API_KEY"));

            Webhook webhook = Webhook.Create(
                new Dictionary<string, object>() {
                    { "url", "https://www.foobar.com" }
                }
            );
            Console.WriteLine(JsonConvert.SerializeObject(webhook, Formatting.Indented));
        }
    }
}
