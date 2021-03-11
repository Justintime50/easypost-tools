package users;

import com.easypost.EasyPost;
import com.easypost.exception.EasyPostException;
import com.easypost.model.User;
import io.github.cdimascio.dotenv.Dotenv;

/**
 * Deletes a user (requires a prod API key).
 */
public class DeleteUser {
  /**
   * Main script.
   *
   * @param args Accepts any args.
   */
  public static void main(String[] args) {
    String envDir = "/Users/jhammond/git/easypost/easypost-tools/.env";
    Dotenv dotenv = Dotenv.configure().directory(envDir).load();
    EasyPost.apiKey = dotenv.get("EASYPOST_PROD_API_KEY");

    try {
      User user = User.retrieve("user_123...");
      user.delete();
      System.out.println(user.id + " deleted!");
    } catch (EasyPostException e) {
      e.printStackTrace();
    }
  }
}
