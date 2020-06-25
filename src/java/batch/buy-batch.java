import java.util.HashMap;
import java.util.Map;
import java.util.List;
import java.util.ArrayList;

import com.easypost.EasyPost;
import com.easypost.exception.EasyPostException;
import com.easypost.model.Address;
import com.easypost.model.Parcel;
import com.easypost.model.Shipment;
import com.easypost.model.Batch;

// Each of the shipments must have a parcel, a from_address, a to_address, a carrier, a service, and a carrier_accounts array

public class createShipment {

    public static void main(String[] args) {

        EasyPost.apiKey = System.getenv("EASYPOST_PROD_API_KEY");

        Map<String, Object> toAddressMap = new HashMap<String, Object>();
        toAddressMap.put("name", "Jack Sparrow");
        toAddressMap.put("company", "EasyPost");
        toAddressMap.put("street1", "417 MONTGOMERY ST");
        toAddressMap.put("street2", "FLOOR 5");
        toAddressMap.put("city", "SAN FRANCISCO");
        toAddressMap.put("state", "CA");
        toAddressMap.put("country", "US");
        toAddressMap.put("zip", "94104");
        toAddressMap.put("phone", "415-123-4567");

        Map<String, Object> fromAddressMap = new HashMap<String, Object>();
        fromAddressMap.put("name", "Jack Sparrow");
        fromAddressMap.put("company", "EasyPost");
        fromAddressMap.put("street1", "417 MONTGOMERY ST");
        fromAddressMap.put("street2", "FLOOR 5");
        fromAddressMap.put("city", "SAN FRANCISCO");
        fromAddressMap.put("state", "CA");
        fromAddressMap.put("country", "US");
        fromAddressMap.put("zip", "94104");
        fromAddressMap.put("phone", "415-123-4567");

        Map<String, Object> parcelMap = new HashMap<String, Object>();
        parcelMap.put("weight", 22.9);
        parcelMap.put("height", 12.1);
        parcelMap.put("width", 8);
        parcelMap.put("length", 19.8);

        // Try creating a batch with shipment data
        try {
            // Shipment list
            List<Map<String, Object>> shipmentsList = new ArrayList<Map<String, Object>>();

            Map<String, Object> shipmentMap = new HashMap<String, Object>();
            shipmentMap.put("to_address", toAddressMap);
            shipmentMap.put("from_address", fromAddressMap);
            shipmentMap.put("parcel", parcelMap);
            shipmentMap.put("service", "FEDEX_GROUND"); // Required for batch buy
            shipmentMap.put("carrier", "FedEx"); // Required for batch buy

            // Setup carrier accounts
            List<String> carrierAccountsList = new ArrayList<>();
            carrierAccountsList.add(System.getenv("FEDEX_CA"));
            shipmentMap.put("carrier_accounts", carrierAccountsList); // Required for batch buy

            shipmentsList.add(shipmentMap);

            // Create and buy batch
            Map<String, Object> batchMap = new HashMap<String, Object>();
            batchMap.put("shipments", shipmentsList);
            Batch batch = Batch.create(batchMap);
            Thread.sleep(2000); // Pause for creation call // TODO: This is only used for testing, find a better production approach (wait for response)
            batch.buy();

            // Print output
            System.out.println(batch.prettyPrint());

        } catch (EasyPostException e) {
            e.printStackTrace();
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }
}
