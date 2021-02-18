import React from "react";

const Testscores = ({ id, scores }) => {
  const renderScores = () => scores.map((score, idx) => {
    const testnum = idx + 1;
    return (
      <li key={`${id}-${testnum}`} className="student__details__detailInfo">
        <span className="student__details__testnum">Test {testnum}:</span>
        <span>{score}%</span>
      </li>
    );
  });
  
  return (
    <ul className="student__details__information">
      {renderScores()}
    </ul>
  );
};

export default Testscores;
