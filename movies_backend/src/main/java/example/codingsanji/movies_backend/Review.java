package example.codingsanji.movies_backend;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.bson.types.*;
import java.util.*;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;;

@Document(collection = "reviews")
@Data /*takes care of all getters and setters*/
@AllArgsConstructor /*takes all below private fields as arguments*/
@NoArgsConstructor /*takes no parameters*/
public class Review {
    @Id       /*to note that below properties are unique identifiers for the movies */
    private ObjectId id;
    private String body;
    private String movieId;

    public Review(String body) {
        this.body = body;
    }
}
