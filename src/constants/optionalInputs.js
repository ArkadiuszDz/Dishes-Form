import { toInteger, toFloat } from '../constants/methods';

const optionalInputs = {
  pizza: [
    {
      name: 'no_of_slices',
      type: 'number',
      label: 'Number of pizza slices',
      normalize: toInteger,
      pattern: ''
    },
    {
      name: 'diameter',
      type: 'text',
      label: 'Pizza diameter',
      normalize: toFloat,
      pattern: '[0-9]*'
    }
  ],
  soup: [
    {
      name: 'spiciness_scale',
      type: 'number',
      label: 'Spiciness scale (1-10)',
      normalize: toInteger,
      pattern: ''
    }
  ],
  sandwich: [
    {
      name: 'slices_of_bread',
      type: 'number',
      label: 'Number of bread slices',
      normalize: toInteger,
      pattern: ''
    }
  ]
};

export default optionalInputs;