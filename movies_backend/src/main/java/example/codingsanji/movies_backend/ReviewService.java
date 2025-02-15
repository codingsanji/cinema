package example.codingsanji.movies_backend;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ReviewService {
    @Autowired
    private ReviewRepository reviewRepository;

    public Review createReview(String reviewBody, String imdbId, String userId, int rating) {
        Review review = reviewRepository.insert(new Review(reviewBody, imdbId, userId, rating));
        return review;
    }

    public List<Review> getReviewsByMovieIdAndUser(String imdbId, String userId) {
        return reviewRepository.findByMovieIdAndUserId(imdbId, userId);
    }

    public List<Review> getReviewsByMovieId(String imdbId) {
        return reviewRepository.findByMovieId(imdbId);
    }
}
