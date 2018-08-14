export default {
  state: {
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
  reducers: {
    incrementScore: (state, payload) => ({
      ...state,
      score: state.score + Number(payload),
    }),
    incrementSuccess: state => ({
      ...state,
      success: state.success + 1,
    }),
    incrementFails: state => ({
      ...state,
      fails: state.fails + 1,
    }),
    proofsLeft: state => ({
      ...state,
      totalProofs: state.totalProofs - 1,
    }),
    setPlayer: (state, payload) => ({
      ...state,
      player: {
        name: String(payload),
      },
    }),
    resumeAndPause: state => ({
      ...state,
      playing: !state.playing,
    }),
    resetGameState: state => ({
      ...state,
      score: 0,
      totalProofs: 10,
      success: 0,
      fails: 0,
    }),
    startGame: state => ({
      ...state,
      playing: true,
      started: true,
    }),
  },
};
