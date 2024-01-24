import React, { useContext } from "react";
import { CompaniesContext } from "../context/companies";
import Company from "./Company";

const CompanyList = ({ selectedTrade }) => {
  const companies = useContext(CompaniesContext);

  const filteredCompanies = companies?.filter((company) => {
    return company.trade === selectedTrade?.toLowerCase();
  });

  const renderedCompanies = filteredCompanies?.map((company) => {
    return <Company company={company} key={company.id} />;
  });

  return renderedCompanies;
};

export default CompanyList;
