import React from 'react';
import PropTypes from 'prop-types';

const InfoPlayer = ({ player }) => (
  <div key={'player-info'} className="playerInfo">
    Hello! {player.name}
  </div>
);

InfoPlayer.propTypes = {
  player: PropTypes.shape({
    name: PropTypes.string
  }).isRequired
};

export default InfoPlayer;
