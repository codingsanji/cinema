package example.codingsanji.movies_backend;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class RootController {

    @GetMapping("/")
    public String welcome() {
        return "Welcome to the API! Use /api/movies to get movie data.";
    }
}