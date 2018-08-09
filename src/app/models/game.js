export default {
  state: {
    score: 0,
    success: 0,
    fails: 0,
    maxFailures: 5,
    totalProofs: 10,
    timePerProof: 30,
    playing: false,
    player: {
      name: null
    },
    proofs: []
  },
  reducers: {
    incrementScore: (state, payload) => ({
      ...state,
      score: state.score + Number(payload)
    }),
    incrementSuccess: (state) => ({
      ...state,
      success: ++state.success
    }),
    incrementFails: (state) => ({
      ...state,
      fails: ++state.fails
    }),
    proofsLeft: (state) => ({
      ...state,
      totalProofs: --state.totalProofs
    }),
    setPlayer: (state, payload) => {
      return {
        ...state,
        player: {
          name: String(payload)
        }
      }
    },
    resumeAndPause: (state) => ({
      ...state,
      playing: !state.playing
    })
  }
};
