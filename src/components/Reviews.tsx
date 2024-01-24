import React from "react";
import Review from "./Review";
import styles from "./Reviews.module.css";

const Reviews = ({ showReviews, reviews }) => {
  const renderedReviews = reviews?.map((review) => {
    return <Review review={review} key={review.id} />;
  });

  return showReviews ? (
    <div className={styles.reviews}>{renderedReviews}</div>
  ) : null;
};

export default Reviews;
