package addresses;

import com.easypost.EasyPost;
import com.easypost.exception.EasyPostException;
import com.easypost.model.Address;
import io.github.cdimascio.dotenv.Dotenv;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * Creates an Address.
 */
public class CreateAddress {
  /**
   * Main script.
   *
   * @param args Accepts any args.
   */
  public static void main(String[] args) {
    String envDir = "/Users/jhammond/git/easypost/easypost-tools/.env";
    Dotenv dotenv = Dotenv.configure().directory(envDir).load();
    EasyPost.apiKey = dotenv.get("EASYPOST_TEST_API_KEY");

    Map<String, Object> addressHash = new HashMap<String, Object>();

    addressHash.put("street1", "417 Montgomery Street");
    addressHash.put("street2", "5th Floor");
    addressHash.put("city", "SF");
    addressHash.put("state", "CA");
    addressHash.put("zip", "94104");
    addressHash.put("country", "US");
    addressHash.put("company", "EasyPost");
    addressHash.put("phone", "415-123-4567");

    try {
      Address address = Address.create(addressHash);

      System.out.println(address);
    } catch (EasyPostException e) {
      e.printStackTrace();
    }
  }
}
