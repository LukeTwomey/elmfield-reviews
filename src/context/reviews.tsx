import { createContext, useState, useEffect } from "react";

export const ReviewsContext = createContext();

export const ReviewsProvider = ({ children }) => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      const response = await fetch(
        `https://elmfield-reviews-api.up.railway.app/get-reviews`
      );

      const data = await response.json();

      setReviews(data);
    };

    fetchReviews();
  }, []);

  return (
    <ReviewsContext.Provider value={reviews}>
      {children}
    </ReviewsContext.Provider>
  );
};
