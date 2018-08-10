import React from 'react';

class Timer extends React.Component {
  state = {
    elapsed: this.props.totalTimer,
    isPaused: false
  }

  componentWillMount() {
    this.initTimer();
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (this.state.elapsed !== nextState.elapsed) {
      return true;
    } else if (nextProps.stopTimer === true) {
      this.stopTimer();
      this.initTimer();
      return true;
    } else if (nextProps.pause === true && this.state.isPaused === false) {
      this.stopTimer();
      this.pauseTimer();
    } else if (nextProps.pause === false && this.state.isPaused === true) {
      this.stopTimer();
      this.resumeTimer();
    }

    return false;
  }

  pauseTimer = () => {
    this.setState({
      isPaused: true
    });
  }

  resumeTimer = () => {
    this.timer = setInterval(this.countDown, 1000);
    this.setState({
      isPaused: false
    });
  };

  initTimer = () => {
    this.timer = setInterval(this.countDown, 1000);
    this.setState({
      elapsed: this.props.totalTimer
    });
  }

  countDown = () => {
    if (this.state.elapsed === 0) {
      this.stopTimer();
      this.initTimer();
      this.props.timeEnd();
    } else {
      this.setState({
        elapsed: this.state.elapsed - 1
      });
    }
  }

  stopTimer = () => {
    clearInterval(this.timer);
  }

  componentWillUnmount() {
    this.stopTimer();
  }

  render() {
    return (
      <div className="timer">
        {this.state.elapsed}
      </div>
    );
  }
}

export default Timer;
