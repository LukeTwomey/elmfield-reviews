import styles from "./Company.module.css";
import React, { useContext, useState, useEffect } from "react";
import { ReviewsContext } from "../context/reviews";
import CompanySummary from "./CompanySummary";
import Reviews from "./Reviews";

const Company = ({ company }) => {
  const reviews = useContext(ReviewsContext);
  const [rating, setRating] = useState(0);
  const [noOfReviews, setNoOfReviews] = useState(0);
  const [showReviews, setShowReviews] = useState(false);

  const toggleReviews = () => {
    setShowReviews(!showReviews);
  };

  const filteredReviews = reviews?.filter((review) => {
    return review.company === company.id;
  });

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
    <div className={styles.company}>
      <CompanySummary
        company={company}
        toggleReviews={toggleReviews}
        rating={rating}
        noOfReviews={noOfReviews}
        showReviews={showReviews}
      />
      <Reviews showReviews={showReviews} reviews={filteredReviews} />
    </div>
  );
};

export default Company;
