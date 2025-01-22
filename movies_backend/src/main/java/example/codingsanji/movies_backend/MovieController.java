package example.codingsanji.movies_backend;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/movies")
public class MovieController {

    @Autowired
    private TMDBService tmdbService;

    @GetMapping("/{imdbId}")
    public ResponseEntity<Movie> getMovieDetails(@PathVariable String imdbId) {
        Movie movie = tmdbService.fetchMovieDetails(imdbId);
        return ResponseEntity.ok(movie);
    }

    @GetMapping("/popular")
    public ResponseEntity<List<Movie>> getPopularMovies() {
        List<Movie> movies = tmdbService.fetchPopularMovies();
        return ResponseEntity.ok(movies);
    }

    @GetMapping("/genres")
    public ResponseEntity<List<String>> getGenres() {
        List<String> genres = tmdbService.fetchGenres();
        return ResponseEntity.ok(genres);
    }

    @GetMapping("/recommendations/{genreId}")
    public ResponseEntity<List<Movie>> getRecommendations(@PathVariable String genreId) {
        List<Movie> recommendations = tmdbService.fetchRecommendationsByGenre(genreId);
        return ResponseEntity.ok(recommendations);
    }
}
