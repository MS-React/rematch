const measureScoreFace = () => store => next => (action) => {
  if (action.type === 'game/incrementSuccess') {
    store.dispatch({ type: 'happyFace/showHappyFace' });
  } else if (action.type === 'game/incrementFails') {
    store.dispatch({ type: 'happyFace/showUnhappyFace' });
  }

  return next(action);
};

export default measureScoreFace;
