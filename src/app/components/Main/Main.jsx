import React from 'react';
import { connect } from 'react-redux';

import PlayerSelect from '../Player/Select';
import Game from '../Game';

import '../../assets/styles/global.scss';

const Main = ({ game }) => {
  return (
    <main className="game-container">
      {!game.started && <PlayerSelect />}
      <Game />
    </main>
  )
};

const mapStateToProps = state => ({
  game: state.game
});

export default connect(mapStateToProps)(Main);
