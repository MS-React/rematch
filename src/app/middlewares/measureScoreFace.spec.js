import { init } from '@rematch/core';
import * as models from '../models';
import measureScoreFace from './measureScoreFace';


describe('measueScoreFace middleware', () => {
  let store;

  beforeAll(() => {
    models.happyFace.reducers.showHappyFace = jest.fn().mockReturnValue({});
    models.happyFace.reducers.showUnhappyFace = jest.fn().mockReturnValue({});
    store = init({
      models,
      redux: {
        middlewares: [measureScoreFace()],
      },
    });
  });

  describe('game/incrementSuccess is called', () => {
    beforeEach(() => {
      store.dispatch.game.incrementSuccess();
    });

    it('should dispatch the happyFace/showHappyFace reducer', () => {
      expect(models.happyFace.reducers.showHappyFace).toHaveBeenCalled();
    });
  });

  describe('game/incrementFAils is called', () => {
    beforeEach(() => {
      store.dispatch.game.incrementFails();
    });

    it('should dispatch the happyFace/showUnhappyFace reducer', () => {
      expect(models.happyFace.reducers.showUnhappyFace).toHaveBeenCalled();
    });
  });
});
