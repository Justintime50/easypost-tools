using System;
using System.Collections.Generic;
using System.Diagnostics;
using EasyPost;
using Newtonsoft.Json;

namespace EasyPost_shipment_test
{
    class createShipment
    {
        static void Main(string[] args)
        {
            EasyPost.ClientManager.SetCurrent(""); // TODO: .env variable here

            /*
            Address toAddress = Address.Create(toAddress);
            Address fromAddress = Address.Create(fromAddress);
            Parcel parcel = Parcel.Create(parcel);
            CustomsInfo customs = CustomsInfo.Create(customsInfo);

            Shipment shipment = new Shipment() {
            to_address = toAddress,
            from_address = fromAddress,
            parcel = parcel,
            customs_info = customs
            };

            shipment.Create();
            */

            // OR create in one call

            Dictionary<string, object> fromAddress = new Dictionary<string, object>() {
            { "name", "Dr. Steve Brule" },
            { "street1", "417 Montgomery Street" },
            { "street2", "5th Floor" },
            { "city", "San Francisco" },
            { "state", "CA" },
            { "country", "US" },
            { "zip", "94104" }
            };

            Dictionary<string, object> toAddress = new Dictionary<string, object>() {
            { "company", "EasyPost" },
            { "street1", "417 Montgomery Street" },
            { "street2", "Floor 5" },
            { "city", "San Francisco" },
            { "state", "CA" },
            { "country", "US" },
            { "zip", "94104" }
            };

            Shipment shipment = Shipment.Create(new Dictionary<string, object>() {
            { "parcel", new Dictionary<string, object>() {
                { "length", 8 }, { "width", 6 }, { "height", 5 }, { "weight", 10 }
            } },
            { "to_address", toAddress },
            { "from_address", fromAddress },
            //{ "reference", "ShipmentRef" }
            });

            Console.WriteLine(JsonConvert.SerializeObject(shipment, Formatting.Indented));
        }
    }
}
