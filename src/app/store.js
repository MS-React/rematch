import { init } from '@rematch/core'
import * as models from './models'

const store = init({
  game
});

export default store;
export const { dispatch } = store;
