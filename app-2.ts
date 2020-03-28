import { Store, createStore } from 'redux';
import { contadorReducer } from './contador/contador.reducer';
import { incrementarAction, multiplicarAction } from './contador/contador.actions';


// Esto vendria a ser el store de REDUX
const store: Store = createStore( contadorReducer );

// Al cual nos podmoes subscribir
store.subscribe(() => {
    console.log('store', store.getState());
});

store.dispatch( incrementarAction )
store.dispatch( multiplicarAction )
