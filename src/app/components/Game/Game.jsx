import React from 'react';
import { connect } from 'react-redux';

import Timer from '../Timer';
import ScoreBoard from '../ScoreBoard';

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
    this.generateProof();
  }

  componentDidUpdate() {
    if (this.state.resetTimer === true) {
      this.setState({
        resetTimer: false
      });
    }
  }

  generateProof = (resetTimer = false) => {
    const FirstNumber = Math.floor((Math.random() * 100) + 1);
    const SecondNumber = Math.floor((Math.random() * 100) + 1);
    const mathOperators = ['+', '-', '/', '*'];
    const operatorChoosed = mathOperators[Math.floor(Math.random() * mathOperators.length)];
    const equation = `${FirstNumber} ${operatorChoosed} ${SecondNumber}`;
    const result = Number(eval(equation));

    this.setState({
      proof: {
        result,
        equation
      },
      resetTimer
    });
  }

  setResult = (event) => {
    this.setState({
      userInputResult: Number(event.target.value)
    });
  }

  confirmProof = () => {
    const { success, failure } = this.props;
    if (this.state.proof.result === this.state.userInputResult) {
      success();
    } else {
      failure();
    }

    this.nextProof(true);
  }

  nextProof = (confirmProof = false) => {
    const { game, proofsLeft, incrementScore } = this.props;
    proofsLeft();
    incrementScore(10);

    if (game.totalProofs === 0) {
      this.endGame();
    } else {
      this.generateProof(confirmProof);
    }
  }

  timeEnded = () => {
    this.nextProof();
  };

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

  render() {
    const { game, player } = this.props;

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
        <div className="information-bar">
          <div className="playerInfo">
            Hello! {player}
          </div>
          <div className="timer">
            <Timer
              totalTimer={game.timePerProof}
              timeEnd={this.timeEnded}
              resetTimer={this.state.resetTimer}
            />
          </div>
          <div className="actual-score">
            Total Score: {game.score} <br />
            Success: {game.success} <br />
            Failures: {game.fails} <br />
          </div>
        </div>
        {this.state.proof.equation} = ?
        <input type="text" onChange={this.setResult} />
        <button onClick={this.confirmProof}>Confirm</button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  game: state.game,
  player: state.game.player.name
});

const mapDispatchToProps = dispatch => ({
  success: () => dispatch.game.incrementSuccess(),
  failure: () => dispatch.game.incrementFails(),
  proofsLeft: () => dispatch.game.proofsLeft(),
  incrementScore: (score) => dispatch.game.incrementScore(score),
  resetGameState: () => dispatch.game.resetGameState()
});

export default connect(mapStateToProps, mapDispatchToProps)(Game);
