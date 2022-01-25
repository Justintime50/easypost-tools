package shipments;

import com.easypost.EasyPost;
import com.easypost.exception.EasyPostException;
import com.easypost.model.Shipment;
import io.github.cdimascio.dotenv.Dotenv;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * Creates a shipment.
 */
public class CreateShipment {
  /**
   * Main script.
   *
   * @param args Accepts any args.
   */
  public static void main(String[] args) {
    String envDir = "/Users/jhammond/git/easypost/easypost-tools/.env";
    Dotenv dotenv = Dotenv.configure().directory(envDir).load();
    EasyPost.apiKey = dotenv.get("EASYPOST_TEST_API_KEY");

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

    try {
      Map<String, Object> shipmentMap = new HashMap<String, Object>();
      shipmentMap.put("to_address", toAddressMap);
      shipmentMap.put("from_address", fromAddressMap);
      shipmentMap.put("parcel", parcelMap);
      shipmentMap.put("service", "FEDEX_GROUND");

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
