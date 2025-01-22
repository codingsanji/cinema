package example.codingsanji.movies_backend;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.bson.types.*;
import java.util.*;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.DocumentReference;


/*Annotate this class as a document to let framework note that this class sheet presents each document in the movies collection*/
@Document(collection = "movies")
@Data /*takes care of all getters and setters*/
@AllArgsConstructor /*takes all below private fields as arguments*/
@NoArgsConstructor /*takes no parameters*/
public class Movie {
    @Id       /*to note that below properties are unique identifiers for the movies */
    private ObjectId id;
    private String imdbId;
    private String title;
    private String releaseDate;
    private String trailerLink;
    private String poster;
    private List<String> genres;
    private List<String> backdrops;

    @DocumentReference /*causes database to store only the ids of the review and so reviews will be in separate collection*/
    private List<Review> reviewIds;

}
