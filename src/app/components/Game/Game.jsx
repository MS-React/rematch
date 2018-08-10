import React from 'react';
import { connect } from 'react-redux';

import Timer from './Timer';
import PlayerInfo from '../Player/Info';
import ScoreBoard from './Score/Board';
import ScoreSummary from './Score/Summary';
import GameActions from './Actions';
import Proof from './Proof';

import { createProof } from '../../utils/proofGenerator';

class Game extends React.PureComponent {
  state = {
    proof: {
      result: null,
      equation: null
    },
    userInputResult: null,
    resetTimer: false,
    gameEnd: false
  }

  componentWillMount() {
    this.createProof();
  }

  componentDidUpdate() {
    if (this.state.resetTimer === true) {
      this.setState({
        resetTimer: false
      });
    }
  }

  createProof = (resetTimer = false) => {
    this.setState({
      proof: createProof(),
      resetTimer
    });
  }

  onSetResult = (event) => {
    this.setState({
      userInputResult: Number(event.target.value)
    });
  }

  onConfirmProof = () => {
    const { success, failure, incrementScore } = this.props;

    if (this.state.proof.result === this.state.userInputResult) {
      success();
      incrementScore(10);
    } else {
      failure();
    }

    this.nextProof(true);
  }

  nextProof = (confirmProof = false) => {
    const { game, proofsLeft } = this.props;
    proofsLeft();

    if (game.totalProofs === 0) {
      this.endGame();
    } else {
      this.createProof(confirmProof);
    }
  }

  onTimeEnd = () => {
    this.props.failure();
    this.nextProof();
  };

  onResumeAndPause = () => {
    this.props.resumeAndPause();
  }

  endGame = () => {
    this.setState({
      endGame: true
    });
  }

  resetGame = () => {
    this.setState({
      endGame: false
    }, () => {
      this.props.resetGameState();
    });
  }

  onStartGame = () => {
    this.props.startGame();
  }

  render() {
    const { game, player } = this.props;
    const { resetTimer, proof } = this.state;

    if (!game.started) {
      return (
        <button onClick={this.onStartGame}>Play!</button>
      );
    }

    if (this.state.endGame) {
      return (
        <ScoreBoard
          score={game.score}
          success={game.success}
          fails={game.fails}
          resetGame={this.resetGame}
        />
      );
    }

    return (
      <div className="game">
        <div className="game-info">
          <PlayerInfo player={player} />
          <Timer
            totalTimer={game.timePerProof}
            timeEnd={this.onTimeEnd}
            resetTimer={resetTimer}
            pause={!game.playing}
          />
          <ScoreSummary results={game} />
        </div>
        <Proof proof={proof} />
        <GameActions
          setResult={this.onSetResult}
          confirmProof={this.onConfirmProof}
          resumePause={this.onResumeAndPause}
          playing={game.playing}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  game: state.game,
  player: state.game.player
});

const mapDispatchToProps = dispatch => ({
  startGame: () => dispatch.game.startGame(),
  success: () => dispatch.game.incrementSuccess(),
  failure: () => dispatch.game.incrementFails(),
  proofsLeft: () => dispatch.game.proofsLeft(),
  incrementScore: (score) => dispatch.game.incrementScore(score),
  resetGameState: () => dispatch.game.resetGameState(),
  resumeAndPause: () => dispatch.game.resumeAndPause()
});

export default connect(mapStateToProps, mapDispatchToProps)(Game);
