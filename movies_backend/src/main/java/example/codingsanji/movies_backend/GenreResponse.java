package example.codingsanji.movies_backend;

import java.util.List;
import java.util.Map;

public class GenreResponse {
    private List<Map<String, String>> genres;

    public List<Map<String, String>> getGenres() {
        return genres;
    }

    public void setGenres(List<Map<String, String>> genres) {
        this.genres = genres;
    }
}
