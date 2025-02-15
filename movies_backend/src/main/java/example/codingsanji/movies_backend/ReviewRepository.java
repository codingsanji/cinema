package example.codingsanji.movies_backend;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ReviewRepository extends MongoRepository<Review, ObjectId> {
    List<Review> findByMovieIdAndUserId(String movieId, String userId);

    List<Review> findByMovieId(String movieId);
}
