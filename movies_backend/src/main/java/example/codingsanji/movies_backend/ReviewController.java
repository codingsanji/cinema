package example.codingsanji.movies_backend;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/reviews")
public class ReviewController {

    @Autowired
    private ReviewService reviewService;

    @Autowired
    private ReviewRepository reviewRepository;

    @PostMapping
    public ResponseEntity<Review> createReview(@RequestBody Map<String, String> payload) {
        // Call the createReview method correctly with the review body and IMDb ID
        Review createdReview = reviewService.createReview(payload.get("reviewBody"), payload.get("imdbId"));
        return new ResponseEntity<>(createdReview, HttpStatus.CREATED);
    }

    @GetMapping
    public ResponseEntity<List<Review>> getAllReviews() {
        // Get all reviews from the repository
        return new ResponseEntity<>(reviewRepository.findAll(), HttpStatus.OK);
    }

    @GetMapping("/movie/{imdbId}")
    public ResponseEntity<List<Review>> getReviewsByMovieId(@PathVariable String imdbId) {
        // Fetch reviews associated with a particular movie's IMDb ID
        List<Review> reviews = reviewService.getReviewsByMovieId(imdbId);
        return new ResponseEntity<>(reviews, HttpStatus.OK);
    }
}
