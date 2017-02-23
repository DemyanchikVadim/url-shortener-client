import { isEmpty, isEmail, equals } from 'validator';

function validateInput(data) {
  const errors = {};

  if (isEmpty(data.username)) {
    errors.username = 'This field is required';
  }
  if (isEmpty(data.email)) {
    errors.email = 'This field is required';
  }
  if (!isEmail(data.email)) {
    errors.email = 'Email is invalid';
  }
  if (isEmpty(data.password)) {
    errors.password = 'This field is required';
  }
  if (isEmpty(data.confirmPassword)) {
    errors.confirmPassword = 'This field is required';
  }
  if (!equals(data.password, data.confirmPassword)) {
    errors.confirmPassword = 'Passwords must match';
  }
  const isValid = Object.keys(errors).length === 0;

  return {
    errors,
    isValid
  }
}

export default validateInput;
