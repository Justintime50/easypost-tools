import java.util.HashMap;
import java.util.Map;
import java.util.List;
import java.util.ArrayList;

import com.easypost.EasyPost;
import com.easypost.exception.EasyPostException;
import com.easypost.model.Address;
import com.easypost.model.Parcel;
import com.easypost.model.CustomsItem;
import com.easypost.model.CustomsInfo;
import com.easypost.model.Shipment;

import io.github.cdimascio.dotenv.Dotenv;

public class createShipment {

    public static void main(String[] args) {

        Dotenv dotenv = Dotenv.configure().directory("/Users/jhammond/git/easypost/easypost-tools/.env").load();
        EasyPost.apiKey = dotenv.get("EASYPOST_PROD_API_KEY");

        Map<String, Object> toAddressMap = new HashMap<String, Object>();
        toAddressMap.put("name", "Maggie Simpson");
        toAddressMap.put("street1", "742 Evergreen Terrace");
        toAddressMap.put("street2", "");
        toAddressMap.put("city", "Springfield");
        toAddressMap.put("state", "KY");
        toAddressMap.put("country", "US");
        toAddressMap.put("zip", "40069");

        Map<String, Object> fromAddressMap = new HashMap<String, Object>();
        fromAddressMap.put("name", "Simpler Postage Inc");
        fromAddressMap.put("street1", "388 Townsend St");
        fromAddressMap.put("street2", "Apt 20");
        fromAddressMap.put("city", "San Francisco");
        fromAddressMap.put("state", "CA");
        fromAddressMap.put("zip", "94107");
        fromAddressMap.put("phone", "415-456-7890");

        Map<String, Object> parcelMap = new HashMap<String, Object>();
        parcelMap.put("weight", 22.9);
        parcelMap.put("height", 12.1);
        parcelMap.put("width", 8);
        parcelMap.put("length", 19.8);

        /*
        Map<String, Object> customsInfoMap = new HashMap<String, Object>();
        customsItem1Map.put("description", "EasyPost T-shirts");
        customsItem1Map.put("quantity", 2);
        customsItem1Map.put("value", 23.56);
        customsItem1Map.put("weight", 18.8);
        customsItem1Map.put("origin_country", "us");
        customsItem1Map.put("hs_tariff_number", "123456");
        */

        try {
            Map<String, Object> shipmentMap = new HashMap<String, Object>();
            shipmentMap.put("to_address", toAddressMap);
            shipmentMap.put("from_address", fromAddressMap);
            shipmentMap.put("parcel", parcelMap);
            // shipmentMap.put("customs_info", customsInfoMap);
            
            // Setup carrier accounts
            List<String> carrierAccountsList = new ArrayList<>();
            carrierAccountsList.add(dotenv.get("FEDEX"));
            shipmentMap.put("carrier_accounts", carrierAccountsList);
            
            Shipment shipment = Shipment.create(shipmentMap);

            System.out.println(shipment.prettyPrint());
        } catch (EasyPostException e) {
            e.printStackTrace();
        }
    }
}
