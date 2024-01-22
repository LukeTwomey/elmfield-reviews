import React from "react";
import styles from "./ReviewStars.module.css";
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";

const ReviewStars = ({ rating, toggleReviews }) => {
  const stars = [];
  const integerPart = Math.floor(rating);

  let count = 1;

  for (let i = 0; i < integerPart; i++) {
    stars.push(<FaStar className={styles.star} key={count} />);
    count++;
  }

  const fraction = rating - integerPart;

  if (fraction === 0) {
    count++;
  } else if (fraction >= 0.5) {
    stars.push(<FaStarHalfAlt className={styles.star} key={count} />);
    count++;
  } else {
    stars.push(<FaRegStar className={styles.star} key={count} />);
    count++;
  }

  for (let i = stars.length; i < 5; i++) {
    stars.push(<FaRegStar className={styles.star} key={count} />);
    count++;
  }

  return (
    <div className={styles.stars} onClick={toggleReviews}>
      {stars}
    </div>
  );
};

export default ReviewStars;
