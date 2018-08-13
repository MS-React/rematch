import React from 'react';

const ScoreSummary = ({ results }) => (
  <div key={'game-score-user-summay'} className="score-summary">
    Total Score: {results.score} <br />
    Success: {results.success} <br />
    Failures: {results.fails} <br />
  </div>
);

export default ScoreSummary;
