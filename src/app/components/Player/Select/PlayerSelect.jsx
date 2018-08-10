import React from 'react';
import { connect } from 'react-redux';

import './PlayerSelect.scss';

class PlayerSelect extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  state = {
    playerName: null
  }

  setPlayerHandler = (event) => {
    this.setState({
      playerName: event.target.value
    });
  }

  play = () => {
    const { setPlayer } = this.props;
    setPlayer(this.state.playerName);
  }

  render() {
    const { setPlayer } = this.props;

    return (
      <div className="selectPlayer">
        <div>Are you good with Maths? Lets see!</div>
        <div>Choose a Name to start!</div>
        <input type="text" onChange={this.setPlayerHandler} />
        <button onClick={this.play}>Play!</button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  player: state.game.player
});

const mapDispatchToProps = dispatch => ({
  setPlayer: (name) => dispatch.game.setPlayer(name)
});

export default connect(mapStateToProps, mapDispatchToProps)(PlayerSelect);
