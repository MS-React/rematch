import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import ScoreBoard from './ScoreBoard';

describe('ScoreBoard', () => {
  let wrapper;
  let defaultProps;

  beforeEach(() => {
    defaultProps = {
      success: 0,
      fails: 0,
      score: 0,
      resetGame: jest.fn()
    };
    wrapper = shallow(<ScoreBoard {...defaultProps} />);
  });

  it('should show user result report and a button to restart the game', () => {
    expect(renderer.create(wrapper).toJSON())
      .toMatchSnapshot();
  });
});
