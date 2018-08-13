import store from './store';

describe('Store', () => {
  describe('WHEN initialize', () => {
    const initialState = {
      game: {
        score: 0,
        success: 0,
        fails: 0,
        maxFailures: 5,
        totalProofs: 10,
        timePerProof: 30,
        playing: false,
        started: false,
        player: {
          name: null,
        },
        proofs: [],
      },
    };

    it('should start with the expected initial State', () => {
      expect(store.getState()).toEqual(initialState);
    });
  });
});
