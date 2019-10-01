const addInputs = (dishtype) => {
  return {
    type: 'ADD_INPUTS',
    payload: dishtype
  }
}

const storeValues = (values) => {
  return {
    type: 'STORE_VALUES',
    payload: values
  }
}

const showModal = () => {
  return {
    type: 'SHOW_MODAL'
  }
}

const hideModal = () => {
  return {
    type: 'HIDE_MODAL'
  }
}

export { addInputs, showModal, hideModal, storeValues };