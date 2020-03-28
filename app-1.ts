
import { contadorReducer } from './contador/contador.reducer';
import { Action, Reducer } from './ngrx-fake/ngrx'

// console.log( reducer(10, dividirAction) );

// Fabricamos un store
class Store<T> {
  // T -> es un tipo generico que nos dice que sera cualquier tipo que le pase y la variable seria del mismo tipo que le paso
  // private state: T;

  constructor(
    private reducer: Reducer<T>,
    private state: T
  ) {
  }

  getState() {
    return this.state;
  }

  // Metodo que ejecuta las funciones
  dispatch( action: Action ) {

    this.state = this.reducer(this.state, action);

  }


}

export const store = new Store(
                contadorReducer, // Funcion sin ejecutar 
                10 // Valor inicial
              );

