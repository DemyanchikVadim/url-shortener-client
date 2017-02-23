import { isEmpty, isURL } from 'validator';

function validateInput(data) {
  const errors = {};
  if (isEmpty(data.link)) {
    errors.link = 'Input is empty';
  }
  if (!isURL(data.link) && !isEmpty(data.link)) {
    errors.link = 'It is not a valid url.';
  }
  if (isEmpty(data.tags)) {
    errors.tags = 'Input is empty';
  }
  const isValid = Object.keys(errors).length === 0;

  return {
    errors,
    isValid
  }
}

export default validateInput;
