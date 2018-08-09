import React from 'react';

class Timer extends React.Component {
  state = {
    elapsed: this.props.totalTimer
  }

  componentWillMount() {
    this.initTimer();
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.resetTimer === true) {
      this.resetTimer();
      this.initTimer();
      return true;
    } else if (this.state.elapsed !== nextState.elapsed) {
      return true;
    }

    return false;
  }

  initTimer = () => {
    this.timer = setInterval(this.countDown, 1000);
    this.setState({
      elapsed: this.props.totalTimer
    });
  }

  countDown = () => {
    const { timeEnd } = this.props;

    if (this.state.elapsed === 0) {
      this.resetTimer();
      this.initTimer();
      timeEnd();
    } else {
      this.setState({
        elapsed: this.state.elapsed - 1
      });
    }
  }

  resetTimer = () => {
    clearInterval(this.timer);
  }

  componentWillUnmount() {
    this.resetTimer();
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
