package example.codingsanji.movies_backend;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;
import java.util.Optional;

@org.springframework.stereotype.Service
/*Database Access Methods*/
public class MovieService {
    @Autowired
    private MovieRepository movieRepository;
    public List<Movie> allMovies(){
        return movieRepository.findAll();
    }

    public Optional<Movie> singleMovie(String imdbId){ /*Optional since if there is no such id itll import null*/
        return movieRepository.findMovieByImdbId(imdbId);
    }
}
