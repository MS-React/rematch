export default {
  state: {
    display: false,
    showHappyFace: false,
    showUnhappyFace: false,
  },
  reducers: {
    showHappyFace: state => ({
      ...state,
      display: true,
      showHappyFace: true,
      showUnhappyFace: false,
    }),
    showUnhappyFace: state => ({
      ...state,
      display: true,
      showUnhappyFace: true,
      showHappyFace: false,
    }),
  },
};
