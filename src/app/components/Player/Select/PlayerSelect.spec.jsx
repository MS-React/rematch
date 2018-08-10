import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import { init } from '@rematch/core'
import * as models from '../../../models'

import PlayerSelect from './PlayerSelect';

describe('PlayerSelect', () => {
  let Component;
  let wrapper;
  let store;

  beforeAll(() => {
    store = init({ models });
  });

  beforeEach(() => {
    Component = shallow(<PlayerSelect store={store} />);
  });

  it('should show the user an input to choose his nickname an a button to start', () => {
    expect(renderer.create(Component.html()).toJSON())
      .toMatchSnapshot();
  });

  describe('setPlayer', () => {
    beforeEach(() => {
      store.dispatch.game.setPlayer = jest.fn();
      wrapper = Component.dive();
      wrapper.find('input').prop('onChange')({
        target: {
          value: 'John Doe'
        }
      });
    });

    it('should dispatch setPlayer from store', () => {
      expect(store.dispatch.game.setPlayer).toHaveBeenCalledWith('John Doe');
    });
  });
});
