package walletmicroservice.Exception;

public class CategoryException extends  Exception {

    private final String message = "Exception";

    @Override
    public String getMessage() {
        return message;
    }
}
