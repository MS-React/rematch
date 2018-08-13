import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import Proof from './Proof';

describe('Proof', () => {
  let wrapper;
  let defaultProps;

  beforeEach(() => {
    defaultProps = {
      proof: {
        equation: '1 + 1',
      },
    };
    wrapper = shallow(<Proof {...defaultProps} />);
  });

  it('should show user the summary reportto the user', () => {
    expect(renderer.create(wrapper).toJSON())
      .toMatchSnapshot();
  });
});
