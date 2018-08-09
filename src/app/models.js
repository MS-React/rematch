export const game = {
  state: {
    score: 0,
    success: 0,
    fails: 0,
    maxFailures: 5,
    totalToWin: 10,
    timePerProof: 30,
    playing: false,
    player: {
      name: null
    }
  },
  reducers: {
    incrementScore(state, payload) {
      return state.score + payload;
    },
    incrementSuccess(state) {
      state.success + 1;
    },
    incrementFails(state) {
      state.fails + 1;
    },
    proofsLeft(state) {
      state.totalToWin - 1;
    },
    setPlayer(state, payload) {
      state.name = payload;
    },
    pause(state) {
      state.playing = !state.playing;
    }
  }
};
