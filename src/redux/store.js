import { createStore } from 'redux';
import { rootReducer } from './reducer';

const initialState = {
  elements: [],
  show: false,
  formValues: {}
}

const store = createStore(rootReducer, initialState);

//store.subscribe(() => console.log(store.getState()));

export { store };