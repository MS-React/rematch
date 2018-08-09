import store, { dispatch } from './store';

console.log('almacen de la aplicacion?', store);

console.log('count::state?', store.getState());
// Reducer
dispatch({ type: 'count/increment', payload: 1 });
console.log('count::state?', store.getState());

// Effect
dispatch({ type: 'count/incrementAsync', payload: 1 });
console.log('count::state?', store.getState());
