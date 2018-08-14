import React from 'react';
import PropTypes from 'prop-types';

const ScoreSummary = ({ results }) => (
  <div key="game-score-user-summay" className="score-summary">
    Total Score: {results.score} <br />
    Success: {results.success} <br />
    Failures: {results.fails}
    <br />
  </div>
);

ScoreSummary.propTypes = {
  results: PropTypes.shape({
    score: PropTypes.number,
    success: PropTypes.number,
    fails: PropTypes.number,
  }).isRequired,
};

export default ScoreSummary;
