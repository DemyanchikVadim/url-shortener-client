import validator from 'validator';

function validateInput(data) {
  const errors = {};

  if (validator.isEmpty(data.identifier)) {
    errors.identifier = 'This field is required';
  }
  if (validator.isEmpty(data.password)) {
    errors.password = 'This field is required';
  }
  const isValid = Object.keys(errors).length === 0;

  return {
    errors,
    isValid
  }
}

export default validateInput;
