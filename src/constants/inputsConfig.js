const inputsConfig = {
  name: {
    message: 'Enter a valid name',
    regex: /^[a-zA-Z\s]*$/
  },
  preparation_time: {
    message: 'Enter a valid time',
    regex: /^[0-9]{1,}[:][0-5]{1}[0-9]{1}[:][0-5]{1}[0-9]{1}$/,
  },
  no_of_slices: {
    message: 'Enter a valid number of pizza slices ',
    regex: /^\d{1,2}$/
  },
  diameter: {
    message: 'Enter a valid diameter value',
    // regex: /^\d.$/
    regex: /^([0-9]{1,2}){1}(\.[0-9]{1,2})?$/,
    //regex: /[+-]?([0-9]*[.])?[0-9]+/
  },
  spiciness_scale: {
    message: 'Enter a valid spiciness scale value',
    regex: /^[1-9]$|^[1-9]$|^(10)$/,
  },
  slices_of_bread: {
    message: 'Enter a valid number of bread slices',
    regex: /^\d{1,2}$/
  }
};


export default inputsConfig;

