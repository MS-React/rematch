import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Game = ({ game, setPlayer, startGame }) => {
  return (
    <div>Welcome to Game!</div>
  );
};

const mapStateToProps = state => ({
  game: state.game
});

const mapDispatchToProps = dispatch => ({
  setPlayer: () => dispatch.game.setPlayer,
  startGame: () => dispatch.game.startGame
});

export default connect(mapStateToProps, mapDispatchToProps)(Game);