import React from 'react';
import { shallow } from 'enzyme';
import { init } from '@rematch/core';
import renderer from 'react-test-renderer';
import * as models from '../../models';

import Game from './Game';

jest.mock('../../utils/proofGenerator', () => ({
  createProof: jest.fn().mockReturnValue({
    equation: '1 - 1',
    result: 0,
  }),
}));

describe('<Game />', () => {
  let store;
  let wrapper;

  beforeAll(() => {
    store = init({ models });
    store.getState().game.player = {
      name: 'John Doe',
    };
    store.dispatch.game = {
      ...store.dispatch.game,
      startGame: jest.fn(),
      resumeAndPause: jest.fn(),
      incrementFails: jest.fn(),
      incrementSuccess: jest.fn(),
      incrementScore: jest.fn(),
      proofsLeft: jest.fn(),
      resetGameState: jest.fn(),
    };
  });

  describe('initializes', () => {
    beforeEach(() => {
      wrapper = shallow(<Game store={store} />);
    });

    it('should render a button to start', () => {
      expect(renderer.create(wrapper.html()).toJSON())
        .toMatchSnapshot();
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

  describe('is playing', () => {
    let gameActionsComponent;
    let timerComponent;

    beforeEach(() => {
      store.getState().game.started = true;
      wrapper = shallow(<Game store={store} />).dive();
      gameActionsComponent = wrapper.find('GameActions');
      timerComponent = wrapper.find('Timer');
    });

    describe('confirmProof', () => {
      describe('success', () => {
        beforeEach(() => {
          gameActionsComponent.prop('setResult')({ target: { value: 0 } });
          gameActionsComponent.prop('confirmProof')();
        });

        it('should dispatch incrementSuccess callback from store', () => {
          expect(store.dispatch.game.incrementSuccess).toHaveBeenCalled();
        });

        it('should dispatch incrementScore callback from store', () => {
          expect(store.dispatch.game.incrementScore).toHaveBeenCalled();
        });
      });

      describe('fails', () => {
        beforeEach(() => {
          gameActionsComponent.prop('setResult')({ target: { value: -1 } });
          gameActionsComponent.prop('confirmProof')();
        });
        it('should dispatch incrementFails callback from store', () => {
          expect(store.dispatch.game.incrementFails).toHaveBeenCalled();
        });
      });
    });

    describe('pause', () => {
      beforeEach(() => {
        gameActionsComponent.prop('resumePause')({ target: { value: -1 } });
      });
      it('should dispatch resumeAndPause callback from store', () => {
        expect(store.dispatch.game.resumeAndPause).toHaveBeenCalled();
      });
    });

    describe('timer ends', () => {
      beforeEach(() => {
        store.getState().game.totalProofs = 0;
        timerComponent.prop('timeEnd')();
      });

      it('should dispatch incrementFails callback from store', () => {
        expect(store.dispatch.game.incrementFails).toHaveBeenCalled();
      });
    });
  });

  describe('finish', () => {
    let scoreBoardComponent;
    beforeEach(() => {
      store.getState().game.started = true;
      wrapper = shallow(<Game store={store} />).dive();
      wrapper.setState({
        endGame: true,
      });
      scoreBoardComponent = wrapper.find('ScoreBoard');
    });

    it('should display the <ScoreBoard />', () => {
      expect(scoreBoardComponent).toHaveLength(1);
    });

    describe('reset game', () => {
      beforeEach(() => {
        scoreBoardComponent.prop('resetGame')();
      });

      it('should dispatch resetGameState callback from store', () => {
        expect(store.dispatch.game.resetGameState).toHaveBeenCalled();
      });
    });
  });
});
