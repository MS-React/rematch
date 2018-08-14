import { init } from '@rematch/core';
import * as models from './models';
import measureScoreFace from './middlewares/measureScoreFace';

const store = init({
  models,
  redux: {
    middlewares: [measureScoreFace()],
  },
});

export default store;
