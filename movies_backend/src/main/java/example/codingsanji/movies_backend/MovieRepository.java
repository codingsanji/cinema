package example.codingsanji.movies_backend;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.Optional;

public interface MovieRepository extends MongoRepository<Movie , ObjectId> {
    Movie findByImdbId(String imdbId);
    Optional<Movie> findMovieByImdbId(String imdbId);
}
