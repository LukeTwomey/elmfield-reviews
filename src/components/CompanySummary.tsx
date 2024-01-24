import React from "react";
import PhoneNumber from "./PhoneNumber";
import ReviewStars from "./ReviewStars";
import ReviewSummary from "./ReviewSummary";
import styles from "./CompanySummary.module.css";

const CompanySummary = ({
  company,
  toggleReviews,
  rating,
  noOfReviews,
  showReviews,
}) => {
  return (
    <div className={styles.summary}>
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
  );
};

export default CompanySummary;
