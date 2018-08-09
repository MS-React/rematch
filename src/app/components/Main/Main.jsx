import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import SelectPlayer from '../SelectPlayer';
import Game from '../Game';

import '../../assets/styles/global.scss';

const Main = ({ game }) => {
  return (
    <main className="game-container">
      {
        game.player.name === null
        && <SelectPlayer />
        || <Game />
      }
    </main>
  )
};

const mapStateToProps = state => ({
  game: state.game
});

export default connect(mapStateToProps)(Main);
