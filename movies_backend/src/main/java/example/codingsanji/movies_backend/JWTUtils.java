package example.codingsanji.movies_backend;

import java.security.MessageDigest;
import java.util.Date;

import javax.crypto.spec.SecretKeySpec;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;

public class JWTUtils {
public static String secret = "THIS_IS_TOP_SECRET";

    public static SecretKeySpec createKey(String secretString) {
        try {
            MessageDigest digest = MessageDigest.getInstance("SHA-256");
            return new SecretKeySpec(digest.digest(secretString.getBytes()),"AES");

        } catch (Exception e) {
            e.printStackTrace();
        }
        return null;
    }

    public static String Generate(String email) {
        Date currentDate = new Date();
        long currentTime = currentDate.getTime();
        return Jwts.builder()
            .subject(email)
            .issuedAt(currentDate)
            .expiration(new Date(currentTime + 1000*(60*60*2))) // ttl = 2 hours
            .encryptWith(createKey(secret), Jwts.ENC.A256GCM)
            .compact();
    }

    public static Claims Decode(String token) {
        return (Claims)
            Jwts.parser()
            .decryptWith(createKey(secret))
            .build()
            .parse(token)
            .getPayload();
    }
}
