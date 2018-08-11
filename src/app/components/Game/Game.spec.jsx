import React from 'react';
import { shallow } from 'enzyme';
import { init } from '@rematch/core'
import * as models from '../../models'
import renderer from 'react-test-renderer';

import Game from './Game';

describe('<Game />', () => {
  let store;
  let wrapper;
  let defaultProps;
  let mathApi;

  beforeAll(() => {
    mathApi = global.Math;
    const mockMath = Object.create(global.Math);
    mockMath.floor = () => 1;
    global.Math = mockMath;
  });

  afterAll(() => {
    global.Math = mathApi;
  });

  beforeAll(() => {
    store = init({ models });
    store.dispatch.game = {
      ...store.dispatch.game,
      startGame: jest.fn(),
      resumeAndPause: jest.fn(),
      failure: jest.fn(),
      success: jest.fn(),
      incrementScore: jest.fn(),
      proofsLeft: jest.fn(),
      resetGameState: jest.fn()
    };

    wrapper = shallow(<Game store={store} {...defaultProps} />);
  });

  describe('initializes', () => {
    it('should render a button to start', () => {
      expect(renderer.create(wrapper.html()).toJSON())
        .toMatchSnapshot();
    });
  });

  describe('start', () => {
    it('should dispatch startGame and change the state from store', () => {
      wrapper.dive().find('button').simulate('click');
      expect(store.dispatch.game.startGame).toHaveBeenCalled();
    });

    it('should render <PlayerInfo> , <Timer>, <ScoreSummary>, <Proof> and <GameActions> components', () => {
      store.getState().game.started = true;
      expect(renderer.create(wrapper.html()).toJSON())
        .toMatchSnapshot();
    });
  });
});
