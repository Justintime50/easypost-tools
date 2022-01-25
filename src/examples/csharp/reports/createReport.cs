using System;
using System.Collections.Generic;
using EasyPost;
using Newtonsoft.Json;

namespace csharp
{
    class createReport
    {
        static void Main()
        {
            EasyPost.ClientManager.SetCurrent(Environment.GetEnvironmentVariable("EASYPOST_TEST_API_KEY"));

            Dictionary<string, object> parameters = new Dictionary<string, object>() {
                { "start_date", "2021/01/01" },
                { "end_date", "2021/02/01" }
            };
            Report report = Report.Create("shipment", parameters);

            Console.WriteLine(JsonConvert.SerializeObject(report, Formatting.Indented));
        }
    }
}
