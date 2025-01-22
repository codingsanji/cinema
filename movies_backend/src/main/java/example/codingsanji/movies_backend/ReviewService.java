package example.codingsanji.movies_backend;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.data.mongodb.core.query.Update;

import java.util.List;

import static org.springframework.data.mongodb.core.aggregation.SelectionOperators.First.first;

@org.springframework.stereotype.Service
public class ReviewService {
    @Autowired
    private ReviewRepository reviewRepository;

    @Autowired
    private MongoTemplate mongoTemplate;


    public Review createReview(String reviewBody, String imdbId) {
        Review review = reviewRepository.insert(new Review(reviewBody));

        mongoTemplate.update(Movie.class)
                .matching(Criteria.where("imdbId").is(imdbId))
                .apply(new Update().push("reviewIds").value(review.getId()))
                .first();

        return review;
    }


    public List<Review> getReviewsByMovieId(String imdbId) {
        Movie movie = mongoTemplate.findOne(Query.query(Criteria.where("imdbId").is(imdbId)), Movie.class);
        if (movie != null && movie.getReviewIds() != null) {
            return movie.getReviewIds();
        }

        return List.of();
    }
}
