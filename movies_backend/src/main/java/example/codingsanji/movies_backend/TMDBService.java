package example.codingsanji.movies_backend;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.Arrays;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@Service
public class TMDBService {

    private final RestTemplate restTemplate;

    @Value("${tmdb.api.key}")
    private String apiKey;

    public TMDBService(RestTemplate restTemplate) {
        this.restTemplate = restTemplate;
    }

    public Movie fetchMovieDetails(String imdbId) {
        String url = "https://api.themoviedb.org/3/movie/" + imdbId + "?api_key=" + apiKey;
        ResponseEntity<Movie> response = restTemplate.getForEntity(url, Movie.class);
        return response.getBody();
    }

    public List<Movie> fetchPopularMovies() {
        String url = "https://api.themoviedb.org/3/movie/popular?api_key=" + apiKey;
        ResponseEntity<Movie[]> response = restTemplate.getForEntity(url, Movie[].class);
        return Arrays.asList(response.getBody());
    }

    public List<String> fetchGenres() {
        String url = "https://api.themoviedb.org/3/genre/movie/list?api_key=" + apiKey;
        ResponseEntity<GenreResponse> response = restTemplate.getForEntity(url, GenreResponse.class);
        return response.getBody().getGenres().stream()
                .map(genre -> genre.get("name"))
                .collect(Collectors.toList());
    }

    public List<Movie> fetchRecommendationsByGenre(String genreId) {
        String url = "https://api.themoviedb.org/3/discover/movie?api_key=" + apiKey + "&with_genres=" + genreId;
        ResponseEntity<Movie[]> response = restTemplate.getForEntity(url, Movie[].class);
        return Arrays.asList(response.getBody());
    }
}
