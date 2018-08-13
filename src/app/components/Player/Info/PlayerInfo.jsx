import React from 'react';
import PropTypes from 'prop-types';

const PlayerInfo = ({ player }) => (
  <div key="player-info" className="playerInfo">
    Hello!
    {' '}
    {player.name}
  </div>
);

PlayerInfo.propTypes = {
  player: PropTypes.shape({
    name: PropTypes.string,
  }).isRequired,
};

export default PlayerInfo;
