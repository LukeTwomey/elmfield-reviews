import React from "react";
import styles from "./ReviewStars.module.css";
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";

const ReviewStars = ({ rating }) => {
  console.log("Rating: " + rating);

  const stars = [];
  const integerPart = Math.floor(rating);
  console.log("int: " + integerPart);

  let count = 1;

  for (let i = 0; i < integerPart; i++) {
    stars.push(<FaStar className={styles.star} key={count} />);
    count++;
  }

  const fraction = rating - integerPart;
  console.log("Fraction: " + fraction);

  if (fraction === 0) {
    count++;
  } else if (fraction >= 0.5) {
    console.log(1);
    stars.push(<FaStarHalfAlt className={styles.star} key={count} />);
    count++;
  } else {
    console.log(2);
    stars.push(<FaRegStar className={styles.star} key={count} />);
    count++;
  }

  console.log("stars length: " + stars.length);
  for (let i = stars.length; i < 5; i++) {
    stars.push(<FaRegStar className={styles.star} key={count} />);
    count++;
  }

  return (
    <div className={styles.stars}>
      {/* <FaStar className={styles.star} />
      <FaStar className={styles.star} />
      <FaStarHalfAlt className={styles.star} />
      <FaRegStar className={styles.star} />
      <FaRegStar className={styles.star} /> */}
      {stars}
    </div>
  );
};

export default ReviewStars;
