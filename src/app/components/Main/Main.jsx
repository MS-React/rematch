import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import PlayerSelect from '../Player/Select';
import Game from '../Game';

import '../../assets/styles/global.scss';

const Main = ({ game }) => (
  <main className="game-container">
    {!game.started && <PlayerSelect />}
    <Game />
  </main>
);

Main.defaultProps = {
  game: {},
};

Main.propTypes = {
  game: PropTypes.shape({}),
};

const mapStateToProps = state => ({
  game: state.game,
});

export default connect(mapStateToProps)(Main);
