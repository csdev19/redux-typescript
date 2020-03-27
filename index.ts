import { store } from './app-1'
import { incrementarAction } from './contador/contador.actions';

console.log('store', store.getState());

store.dispatch(incrementarAction);


console.log('store', store.getState());

