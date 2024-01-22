import { createContext, useState, useEffect } from "react";

export const CompaniesContext = createContext();

export const CompaniesProvider = ({ children }) => {
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    const fetchCompanies = async () => {
      const response = await fetch(
        `https://elmfield-reviews-api.up.railway.app/get-companies`
      );

      const data = await response.json();

      setCompanies(data);
    };

    fetchCompanies();
  }, []);

  return (
    <CompaniesContext.Provider value={companies}>
      {children}
    </CompaniesContext.Provider>
  );
};
