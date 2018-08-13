import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const PlayerSelect = ({ setPlayer }) => (
  <div className="selectPlayer">
    <div>
      Are you good with Maths? Lets see!
    </div>
    <div>
      Choose a Name to start!
    </div>
    <input type="text" onChange={setPlayer} />
  </div>
);

PlayerSelect.propTypes = {
  setPlayer: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  setPlayer: event => dispatch.game.setPlayer(event.target.value),
});

export default connect(null, mapDispatchToProps)(PlayerSelect);
