import React from "react";
import moment from "moment";
import styles from "./Review.module.css";
import ReviewStars from "./ReviewStars";

const Review = ({ review }) => {
  const date = moment(review.date).format("Do MMMM YYYY");

  return (
    <div className={styles.review}>
      <div className={styles.top}>
        <div className={styles.left}>
          <div className={styles.author}>{review.author}</div>
          <div className={styles.date}>{date}</div>
        </div>
        <ReviewStars rating={review.rating} />
      </div>
      <div className={styles.content}>{`"${review.review}"`}</div>
    </div>
  );
};

export default Review;
