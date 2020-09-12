using System;
using System.Collections.Generic;
using EasyPost;
using Newtonsoft.Json;

namespace create_webhook
{
    class createWebhook
    {
        static void Main(string[] args)
        {
            EasyPost.ClientManager.SetCurrent(Environment.GetEnvironmentVariable("EASYPOST_API_KEY"));

            Webhook webhook = Webhook.Create(
                new Dictionary<string, object>() {
                    { "url", "https://www.foobar.com" }
                }
            );
            Console.WriteLine(JsonConvert.SerializeObject(webhook, Formatting.Indented));
        }
    }
}
