import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import ScoreSummary from './ScoreSummary';

describe('ScoreSummary', () => {
  let wrapper;
  let defaultProps;

  beforeEach(() => {
    defaultProps = {
      results: {
        success: 0,
        fails: 0,
        score: 0,
      },
    };
    wrapper = shallow(<ScoreSummary {...defaultProps} />);
  });

  it('should show user the summary reportto the user', () => {
    expect(renderer.create(wrapper).toJSON())
      .toMatchSnapshot();
  });
});
