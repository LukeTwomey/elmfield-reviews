import React from "react";
import styles from "./Review.module.css";
import ReviewStars from "./ReviewStars";

const Review = ({ review }) => {
  return (
    <div className={styles.review}>
      <div className={styles.top}>
        <div className={styles.author}>{review.author}</div>
        <ReviewStars rating={review.rating} />
      </div>
      <div className={styles.content}>{`"${review.review}"`}</div>
    </div>
  );
};

export default Review;
