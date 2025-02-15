package example.codingsanji.movies_backend;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "reviews")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Review {
    @Id
    private String id;

    private String body;
    private String movieId;
    private String userId;
    private int rating;

    public Review(String body, String movieId, String userId, int rating) {
        this.body = body;
        this.movieId = movieId;
        this.userId = userId;
        this.rating = rating;
    }
}
