import React from 'react';

const ScoreSummary = ({ results }) => (
  <div className="score-summary">
    Total Score: {results.score} <br />
    Success: {results.success} <br />
    Failures: {results.fails} <br />
  </div>
);

export default ScoreSummary;
