import React from 'react';
import PropTypes from 'prop-types';

class Timer extends React.Component {
  state = {
    elapsed: this.props.totalTimer,
    isPaused: false,
  }

  componentWillMount() {
    this.start();
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (this.state.elapsed !== nextState.elapsed) {
      return true;
    } if (nextProps.resetTimer === true) {
      this.stop();
      this.start();
      return true;
    } if (nextProps.pause === true && this.state.isPaused === false) {
      this.stop();
      this.pause();
    } else if (nextProps.pause === false && this.state.isPaused === true) {
      this.stop();
      this.resume();
    }
    return false;
  }

  componentWillUnmount() {
    this.stop();
  }

  start = () => {
    this.timer = setInterval(this.countDown, 1000);
    this.setState({
      elapsed: this.props.totalTimer,
    });
  }

  countDown = () => {
    if (this.state.elapsed === 0) {
      this.stop();
      this.start();
      this.props.timeEnd();
    } else {
      this.setState(prevState => ({
        elapsed: prevState.elapsed - 1,
      }));
    }
  }

  pause = () => {
    this.setState({
      isPaused: true,
    });
  }

  resume = () => {
    this.timer = setInterval(this.countDown, 1000);
    this.setState({
      isPaused: false,
    });
  };

  stop = () => {
    clearInterval(this.timer);
  }

  render() {
    return (
      <div key="game-timer" className="timer">
        {this.state.elapsed}
      </div>
    );
  }
}

Timer.propTypes = {
  totalTimer: PropTypes.number.isRequired,
  resetTimer: PropTypes.bool,
  pause: PropTypes.bool,
  timeEnd: PropTypes.func.isRequired,
};

Timer.defaultProps = {
  resetTimer: false,
  pause: false,
};

export default Timer;
