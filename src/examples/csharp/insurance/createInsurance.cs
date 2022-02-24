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

            Insurance.create();
        }
    }
}
