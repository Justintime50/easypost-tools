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
        toAddressMap.put("name", "ANDREW PAPA-6442101");
        // toAddressMap.put("company", "");
        toAddressMap.put("street1", "184 KENTLAND ST");
        // toAddressMap.put("street2", "");
        toAddressMap.put("city", "MARKHAM");
        toAddressMap.put("state", "ON");
        toAddressMap.put("country", "CA");
        toAddressMap.put("zip", "L6E 0K9");
        toAddressMap.put("phone", "2895054626");
        toAddressMap.put("email", "mmcreceiver@maves.com");

        Map<String, Object> fromAddressMap = new HashMap<String, Object>();
        fromAddressMap.put("name", "BISSELL CANADA CORPORATION");
        // fromAddressMap.put("company", "");
        fromAddressMap.put("street1", "25 Cottrelle Boulevard, Unit 3");
        // fromAddressMap.put("street2", "");
        fromAddressMap.put("city", "Brampton");
        fromAddressMap.put("state", "ON");
        fromAddressMap.put("country", "CA");
        fromAddressMap.put("zip", "L6S 0C3");
        fromAddressMap.put("phone", "2895054626");
        fromAddressMap.put("email", "bill.hall@nfiindustries.com");

        Map<String, Object> parcelMap = new HashMap<String, Object>();
        parcelMap.put("weight", 197.28);
        // parcelMap.put("height", 12.1);
        // parcelMap.put("width", 8);
        // parcelMap.put("length", 19.8);

        // Try creating a batch with shipment data
        try {
            // Shipment list
            List<Map<String, Object>> shipmentsList = new ArrayList<Map<String, Object>>();

            Map<String, Object> shipmentMap = new HashMap<String, Object>();
            shipmentMap.put("to_address", toAddressMap);
            shipmentMap.put("from_address", fromAddressMap);
            shipmentMap.put("parcel", parcelMap);
            shipmentMap.put("service", "Xpresspost"); // Required for batch buy
            shipmentMap.put("carrier", "CanadaPost"); // Required for batch buy

            // Setup carrier accounts
            List<String> carrierAccountsList = new ArrayList<>();
            carrierAccountsList.add("ca_123...");
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
