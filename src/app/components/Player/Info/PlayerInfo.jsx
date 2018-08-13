import React from 'react';
import PropTypes from 'prop-types';

const InfoPlayer = ({ name }) => (
  <div key={'player-info'} className="playerInfo">
    Hello! {name}
  </div>
);

InfoPlayer.propTypes = {
  player: PropTypes.shape({
    name: PropTypes.string
  }).isRequired
};

export default InfoPlayer;
