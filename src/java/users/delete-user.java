import com.easypost.EasyPost;
import com.easypost.exception.EasyPostException;

EasyPost.apiKey = System.getenv("EASYPOST_PROD_API_KEY");

try {
    User user = User.delete('user_123...');
    System.out.println(user.prettyPrint());
} catch (EasyPostException e) {
    e.printStackTrace();
}
