import styles from "./Company.module.css";
import React, { useContext, useState, useEffect } from "react";
import { ReviewsContext } from "../context/reviews";
import PhoneNumber from "./PhoneNumber";
import Review from "./Review";
import ReviewStars from "./ReviewStars";
import ReviewSummary from "./ReviewSummary";

const Company = ({ company }) => {
  const reviews = useContext(ReviewsContext);
  const [rating, setRating] = useState(0);
  const [noOfReviews, setNoOfReviews] = useState(0);
  const [showReviews, setShowReviews] = useState(false);

  const filteredReviews = reviews?.filter((review) => {
    return review.company === company.id;
  });

  const renderedReviews = filteredReviews?.map((review) => {
    return <Review review={review} key={review.id} />;
  });

  const toggleReviews = () => {
    setShowReviews(!showReviews);
  };

  useEffect(() => {
    let totalRating = 0;
    let count = 0;

    filteredReviews.forEach((review) => {
      count++;
      totalRating = totalRating + review.rating;
    });

    setRating(totalRating / filteredReviews.length);
    setNoOfReviews(count);
  }, []);

  return (
    <>
      <div className={styles.company}>
        <div className={styles.top}>
          <div className={styles.details}>
            <div className={styles.name}>{company.name}</div>
            <PhoneNumber number={company.phone} />
          </div>
          <div className={styles.rating}>
            <ReviewStars rating={rating} toggleReviews={toggleReviews} />
            <ReviewSummary
              noOfReviews={noOfReviews}
              rating={rating}
              showReviews={showReviews}
              toggleReviews={toggleReviews}
            />
          </div>
        </div>

        {showReviews ? (
          <div className={styles.reviews}>{renderedReviews}</div>
        ) : null}
      </div>
    </>
  );
};

export default Company;
