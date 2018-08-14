import React from 'react';
import PropTypes from 'prop-types';

const GameActions = ({
  setResult, confirmProof, resumePause, playing,
}) => (
  <div key="game-user-actions" className="game-actions">
    <input type="text" onChange={setResult} />
    <button type="submit" className="action-confirmProof" onClick={confirmProof}>
      Confirm
    </button>
    <button type="submit" onClick={resumePause}>
      {playing && 'Pause'}
      {!playing && 'Resume'}
    </button>
  </div>
);

GameActions.propTypes = {
  setResult: PropTypes.func.isRequired,
  confirmProof: PropTypes.func.isRequired,
  resumePause: PropTypes.func.isRequired,
  playing: PropTypes.bool,
};

GameActions.defaultProps = {
  playing: false,
};

export default GameActions;
