import styles from "./Company.module.css";
import React, { useContext, useState, useEffect } from "react";
import { ReviewsContext } from "../context/reviews";
import Review from "./Review";
import ReviewStars from "./ReviewStars";
import ReviewSummary from "./ReviewSummary";
import { FaPhoneAlt } from "react-icons/fa";

const Company = ({ company }) => {
  const reviews = useContext(ReviewsContext);
  const [rating, setRating] = useState(0);
  const [noOfReviews, setNoOfReviews] = useState(0);
  const [showReviews, setShowReviews] = useState(false);

  const filteredReviews = reviews?.filter((review) => {
    return review.company === company.id;
  });

  const renderedReviews = filteredReviews?.map((review) => {
    console.log("Review: ");
    console.log(review);

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

  const onLinkClick = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div className={styles.company}>
        <div className={styles.top}>
          <div className={styles.details}>
            <div className={styles.name}>{company.name}</div>
            <div className={styles.phone}>
              <a href="tel" className={styles.number} onClick={onLinkClick}>
                <div className={styles.phoneIcon}>
                  <FaPhoneAlt />
                </div>{" "}
                {company.phone}
              </a>
            </div>
          </div>
          <div className={styles.rating}>
            <ReviewStars rating={rating} />
            <ReviewSummary
              noOfReviews={noOfReviews}
              rating={rating}
              showReviews={showReviews}
              toggleReviews={toggleReviews}
            />
          </div>
        </div>
        {showReviews ? renderedReviews : null}
      </div>
    </>
  );
};

export default Company;
