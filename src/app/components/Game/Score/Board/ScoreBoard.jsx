import React from 'react';
import PropTypes from 'prop-types';

const ScoreBoard = ({
  success, fails, score, resetGame,
}) => (
  <div key="score-user-board" className="score-board">
    <h2>Score Board </h2>
    <h3>Hey! good match</h3>
    <div className="user-report">
      Successful : {success} <br />
      Fails : {fails} <br />
      Total Score : {score} <br />
      <button type="submit" onClick={resetGame}>Try Again! </button>
    </div>
  </div>
);

ScoreBoard.propTypes = {
  success: PropTypes.number,
  fails: PropTypes.number,
  score: PropTypes.number,
  resetGame: PropTypes.func.isRequired,
};

ScoreBoard.defaultProps = {
  success: 0,
  fails: 0,
  score: 0,
};

export default ScoreBoard;
