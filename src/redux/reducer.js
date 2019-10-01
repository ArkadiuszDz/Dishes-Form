import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import optionalInputs from '../constants/optionalInputs';

const inputs = (state = {}, action) => {
  
  switch(action.type){
    case 'ADD_INPUTS':
      if (action.payload !== undefined) {
        return [
          ...optionalInputs[action.payload]
        ]
      } else {
        return []
      }
    default:
      return state
  }
}

const modal = (state = false, action) => {
  switch(action.type){
    case 'SHOW_MODAL':
      return true
    case 'HIDE_MODAL':
      return false
    default:
      return state
  }
}

const inputValues = (state = {}, action) => {
  switch(action.type){
    case 'STORE_VALUES':
      return {...action.payload}
    default:
      return state
  }
}

const rootReducer = combineReducers({
  formValues: inputValues,
  show: modal,
  elements: inputs,
  form: formReducer
});

export { rootReducer };