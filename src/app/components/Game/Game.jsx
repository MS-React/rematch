import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Timer from './Timer';
import PlayerInfo from '../Player/Info';
import ScoreBoard from './Score/Board';
import ScoreSummary from './Score/Summary';
import GameActions from './Actions';
import Proof from './Proof';
import HappyFace from '../HappyFace';

import { createProof } from '../../utils/proofGenerator';

class Game extends React.PureComponent {
  static propTypes = {
    game: PropTypes.shape({}).isRequired,
    player: PropTypes.shape({}).isRequired,
    startGame: PropTypes.func.isRequired,
    resumeAndPause: PropTypes.func.isRequired,
    failure: PropTypes.func.isRequired,
    success: PropTypes.func.isRequired,
    incrementScore: PropTypes.func.isRequired,
    proofsLeft: PropTypes.func.isRequired,
    resetGameState: PropTypes.func.isRequired,
    happyFace: PropTypes.shape({}),
  }

  static defaultProps = {
    happyFace: {},
  }

  state = {
    proof: {
      result: null,
      equation: null,
    },
    userInputResult: null,
    resetTimer: false,
    endGame: false,
  }

  componentWillMount() {
    this.createProof();
  }

  componentDidUpdate() {
    if (this.state.resetTimer === true) {
      this.setState({ // eslint-disable-line
        resetTimer: false,
      });
    }
  }

  onSetResult = (event) => {
    this.setState({
      userInputResult: Number(event.target.value),
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

  onTimeEnd = () => {
    this.props.failure();
    this.nextProof();
  };

  onResumeAndPause = () => {
    this.props.resumeAndPause();
  }

  onStartGame = () => {
    this.props.startGame();
  }

  endGame = () => {
    this.setState({
      endGame: true,
    });
  }

  resetGame = () => {
    this.setState({
      endGame: false,
    }, () => {
      this.props.resetGameState();
    });
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

  createProof = (resetTimer = false) => {
    this.setState({
      proof: createProof(),
      resetTimer,
    });
  }

  render() {
    const { game, player, happyFace } = this.props;
    const { resetTimer, proof } = this.state;

    if (!game.started) {
      return (
        <button type="submit" onClick={this.onStartGame}>
          Play!
        </button>
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
        <HappyFace {...happyFace} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  game: state.game,
  player: state.game.player,
  happyFace: state.happyFace,
});

const mapDispatchToProps = dispatch => ({
  startGame: () => dispatch.game.startGame(),
  success: () => dispatch.game.incrementSuccess(),
  failure: () => dispatch.game.incrementFails(),
  proofsLeft: () => dispatch.game.proofsLeft(),
  incrementScore: score => dispatch.game.incrementScore(score),
  resetGameState: () => dispatch.game.resetGameState(),
  resumeAndPause: () => dispatch.game.resumeAndPause(),
});

export default connect(mapStateToProps, mapDispatchToProps)(Game);
