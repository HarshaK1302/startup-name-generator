import React from "react";
import "./ResultContainer.css";
import NameCard from "../NameCard/NameCard";
const ResultContainer = ({ suggestedNames }) => {
  const suggestNameJs = suggestedNames.map((suggestedName) => {
    return <NameCard key={suggestedName} suggestedName={suggestedName} />;
  });
  return <div className="result-container">{suggestNameJs}</div>;
};
export default ResultContainer;
