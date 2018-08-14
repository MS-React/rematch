import { init } from '@rematch/core';
import happyFace from './happyFace';

describe('happyFace model', () => {
  let store;

  beforeAll(() => {
    store = init({
      models: { happyFace },
    });
  });

  describe('initialState', () => {
    it('should not show any face', () => {
      expect(store.getState().happyFace).toEqual({
        display: false,
        showHappyFace: false,
        showUnhappyFace: false,
      });
    });
  });

  describe('showHappyFace', () => {
    it('should update the score in the state', () => {
      store.dispatch.happyFace.showHappyFace(10);

      const happyFaceState = store.getState().happyFace;
      expect(happyFaceState.display).toBeTruthy();
      expect(happyFaceState.showHappyFace).toBeTruthy();
    });
  });

  describe('showUnhappyFace', () => {
    it('should update the proofs successfuls in the state', () => {
      store.dispatch.happyFace.showUnhappyFace();

      const happyFaceState = store.getState().happyFace;
      expect(happyFaceState.display).toBeTruthy();
      expect(happyFaceState.showUnhappyFace).toBeTruthy();
    });
  });
});
