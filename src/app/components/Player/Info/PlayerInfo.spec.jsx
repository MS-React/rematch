import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import PlayerInfo from './PlayerInfo';

describe('PlayerInfo', () => {
  let wrapper;
  let defaultProps;

  beforeEach(() => {
    defaultProps = {
      player: {
        name: 'John Doe'
      }
    };
    wrapper = shallow(<PlayerInfo {...defaultProps} />);
  });

  it('should show the user an input to choose his nickname an a button to start', () => {
    expect(renderer.create(wrapper).toJSON())
      .toMatchSnapshot();
  });
});
