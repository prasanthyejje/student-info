import React from "react";

const Scores = ({ id, scores }) => {
  const renderScores = () => scores.map((score, idx) => {
    const testnum = idx + 1;
    return (
      <li key={`${id}-${testnum}`} className="student_Info">
        <span>Test {testnum}:</span>
        <span>{score}%</span>
      </li>
    );
  });
  
  return (
    <ul className="student__details">
      {renderScores()}
    </ul>
  );
};

export default Scores;
