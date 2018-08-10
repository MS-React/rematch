import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import GameActions from './GameActions';

describe('GameActions', () => {
  let wrapper;
  let defaultProps;

  beforeEach(() => {
    defaultProps = {
      setResult: jest.fn(),
      confirmProof: jest.fn(),
      resumePause: jest.fn(),
      playing: false
    };
    wrapper = shallow(<GameActions {...defaultProps} />);
  });

  it('should show game actions to confirm the proof and pause/resume with pause as first to the user', () => {
    expect(renderer.create(wrapper).toJSON())
      .toMatchSnapshot();
  });
});
