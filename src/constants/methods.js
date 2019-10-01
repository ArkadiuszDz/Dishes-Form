import inputsConfig from './inputsConfig';
import axios from 'axios';
import { reset } from 'redux-form';
import { showModal, storeValues } from '../redux/actions';


const normalizeTime = (value) => {
  if (!value) {
    return value
  }
  const onlyNums = value.replace(/[^\d]/g, '');
  if (onlyNums.length <= 2) {
    return onlyNums
  }
  if (onlyNums.length <= 4) {
    return `${onlyNums.slice(0, 2)}:${onlyNums.slice(2)}`
  }
  return `${onlyNums.slice(0, 2)}:${onlyNums.slice(2, 4)}:${onlyNums.slice(4, 6)}`
}

const toInteger = (value) => {
  if (value.length > 0) {
    return parseInt(value);
  } else {
    return value;
  }
}

const toFloat = (value) => {

  if (/^([0-9]{1,2}){1}(\.[0-9]{1,2})?$/.test(value.replace(/,/i, '.'))) {
    value = parseFloat(value);
  }
  return value;

}

const validate = values => {
  
  const errors = {};
  if (!values.name || !inputsConfig.name.regex.test(values.name)) {
    errors.name = inputsConfig.name.message;
  }
  if (!values.preparation_time || !inputsConfig.preparation_time.regex.test(values.preparation_time)) {
    errors.preparation_time = inputsConfig.preparation_time.message;
  }
  if (!values.no_of_slices || !inputsConfig.no_of_slices.regex.test(values.no_of_slices)) {
    errors.no_of_slices = inputsConfig.no_of_slices.message;
  }
  if (!values.diameter || !inputsConfig.diameter.regex.test(values.diameter)) {
    errors.diameter = inputsConfig.diameter.message;
  }
  if (!values.spiciness_scale || !inputsConfig.spiciness_scale.regex.test(values.spiciness_scale)) {
    errors.spiciness_scale = inputsConfig.spiciness_scale.message;
  }
  if (!values.slices_of_bread || !inputsConfig.slices_of_bread.regex.test(values.slices_of_bread)) {
    errors.slices_of_bread = inputsConfig.slices_of_bread.message;
  }
  if (values.type === undefined || values.type === "Choose dish type") {
    errors.type = "You must select a dish type"
  }
  return errors;
}

const asyncValidate = (values) => {
  console.log(values, 'async');
}

const submit = (values, dispatch) => {

  axios.post(
    'https://frosty-wood-6558.getsandbox.com:443/dishes',
    values,
    {
      'Content-Type': 'application/json',
    }
  ).then(response => {
    dispatch(storeValues(response.data));
    dispatch(showModal());
    dispatch(reset('dish'));
  })
  .catch(error => console.log(error));
}

export { normalizeTime, validate, asyncValidate, submit, toInteger, toFloat };