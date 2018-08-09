import React from 'react';

const ScoreBoard = ({ success, fails, score, resetGame }) => {
  return (
    <div className="score-board">
      <h2>Score Board</h2>
      <h3>Hey! good match</h3>
      <div>
        Successful : {success} <br />
        Fails : {fails} <br />
        Total Score : {score} <br />
        <button onClick={resetGame}>Try Again!</button>
      </div>
    </div>
  );
}

export default ScoreBoard;
