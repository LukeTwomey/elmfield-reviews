import React from "react";
import PhoneNumber from "./PhoneNumber";
import Contact from "./Contact";
import Email from "./Email";
import Website from "./Website";
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
    <>
      <div className={styles.summary}>
        <div className={styles.details}>
          <div className={styles.name}>{company.name}</div>
          <Contact contact={company.contact} />
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
      <Email email={company.email} />
      <Website website={company.website} />
    </>
  );
};

export default CompanySummary;
