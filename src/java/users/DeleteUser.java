package users;

import com.easypost.EasyPost;
import com.easypost.exception.EasyPostException;
import com.easypost.model.User;

import io.github.cdimascio.dotenv.Dotenv;

public class DeleteUser {
    public static void main(String[] args) {
        Dotenv dotenv = Dotenv.configure().directory("/Users/jhammond/git/easypost/easypost-tools/.env").load();
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
