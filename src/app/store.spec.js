import store from './store';

describe('Store', () => {
  describe('WHEN initialize', () => {
    const initialState = {
      game: {
        fails: 0,
        maxFailures: 5,
        playing: false,
        score: 0,
        started: false,
        success: 0,
        timePerProof: 30,
        totalProofs: 10,
        player: {
          name: null
        }
      }
    };

    it('should start with the expected initial State', () => {
      expect(store.getState()).toEqual(initialState);
    });
  });
});
