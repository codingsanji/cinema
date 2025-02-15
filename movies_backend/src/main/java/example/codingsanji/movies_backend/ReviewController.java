package example.codingsanji.movies_backend;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/reviews")
public class ReviewController {

    @Autowired
    private ReviewService reviewService;

    @PostMapping("/auth")
    public ResponseEntity<Review> createReview(@RequestBody Map<String, Object> payload,
                                               @RequestHeader("Authorization") String token) {
        String userId = JWTUtils.Decode(token).getSubject();  // Extract user ID from JWT
        System.out.println(userId);
        String reviewBody = (String) payload.get("reviewBody");
        String imdbId = (String) payload.get("imdbId");
        int rating = (int) payload.get("rating");

        Review createdReview = reviewService.createReview(reviewBody, imdbId, userId, rating);
        return new ResponseEntity<>(createdReview, HttpStatus.CREATED);
    }

    @GetMapping("/movie/{imdbId}")
    public ResponseEntity<List<Review>> getReviewsByMovieId(@PathVariable String imdbId) {
        List<Review> reviews = reviewService.getReviewsByMovieId(imdbId);
        return new ResponseEntity<>(reviews, HttpStatus.OK);
    }
}
