import React from "react";
import styles from "./ReviewSummary.module.css";
import { FaCaretUp, FaCaretDown } from "react-icons/fa";

const ReviewSummary = ({ noOfReviews, rating, toggleReviews, showReviews }) => {
  const plural = noOfReviews > 1 ? "reviews" : "review";

  return (
    <div className={styles.summary} onClick={toggleReviews}>
      <div className={styles.text}>
        {noOfReviews} {plural} {/*/ {rating}*/}
      </div>
      <div className={styles.caret}>
        {showReviews ? (
          <FaCaretUp onClick={toggleReviews} />
        ) : (
          <FaCaretDown onClick={toggleReviews} />
        )}
      </div>
    </div>
  );
};

export default ReviewSummary;
