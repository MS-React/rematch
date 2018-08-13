import React from 'react';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';
import { init } from '@rematch/core';
import * as models from '../../models';

import Main from './Main';

jest.mock('../../utils/proofGenerator', () => ({
  createProof: jest.fn().mockReturnValue({
    equation: '1 + 1',
    result: 2,
  }),
}));

describe('Main', () => {
  let wrapper;
  let store;

  beforeAll(() => {
    store = init({ models });
  });

  describe('WHEN game did not start yet', () => {
    beforeEach(() => {
      wrapper = mount(
        <Provider store={store}>
          <Main />
        </Provider>,
      );
    });

    it('should show the a <PlayerSelect /> and the <Game /> start button', () => {
      expect(renderer.create(wrapper.html()).toJSON())
        .toMatchSnapshot();
    });
  });

  describe('WHEN game started', () => {
    beforeEach(() => {
      store.dispatch.game.startGame();
      wrapper = mount(
        <Provider store={store}>
          <Main />
        </Provider>,
      );
    });

    it('should display the actual game and no <PlayerSelect />', () => {
      expect(renderer.create(wrapper.html()).toJSON())
        .toMatchSnapshot();
    });
  });
});
