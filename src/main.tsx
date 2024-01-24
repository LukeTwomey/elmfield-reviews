import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { CompaniesProvider } from "./context/companies.tsx";
import { ReviewsProvider } from "./context/reviews.tsx";
import "./main.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ReviewsProvider>
      <CompaniesProvider>
        <App />
      </CompaniesProvider>
    </ReviewsProvider>
  </React.StrictMode>
);
