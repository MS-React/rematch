import React from 'react';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store'
import renderer from 'react-test-renderer';

import Game from './Game';

describe('<Game />', () => {
  const mockStore = configureStore();
  const initialState = {};

  describe('WHEN initializes', () => {
    let wrapper;
    let store

    beforeEach(() => {
      store = mockStore(initialState);
      wrapper = shallow(<Game store={store} />);
    });

    it('THEN it should render a view to start', () => {
      expect(renderer.create(wrapper.html()).toJSON())
        .toMatchSnapshot();
    });
  });
});
