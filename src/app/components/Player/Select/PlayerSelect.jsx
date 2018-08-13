import React from 'react';
import { connect } from 'react-redux';

import './PlayerSelect.scss';

const PlayerSelect = ({ setPlayer }) => (
  <div className="selectPlayer">
    <div>Are you good with Maths? Lets see!</div>
    <div>Choose a Name to start!</div>
    <input type="text" onChange={setPlayer} />
  </div>
);

const mapDispatchToProps = dispatch => ({
  setPlayer: (event) => dispatch.game.setPlayer(event.target.value)
});

export default connect(null, mapDispatchToProps)(PlayerSelect);
