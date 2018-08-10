import React from 'react';

const GameActions = ({ setResult, confirmProof, resumePause, playing }) => (
  <div key={'game-user-actions'} className="game-actions">
    <input type="text" onChange={setResult} />
    <button onClick={confirmProof}>Confirm</button>
    <button onClick={resumePause}>{playing && 'Pause' || 'Resume'}</button>
  </div>
);

export default GameActions;
