import * as actions from '../actions/messageActions';
import * as types from '../constants/AppConstants';

describe('actions', () => {
  it('should create an action to add a message', () => {
    const message = {
      type: 'error',
      text: 'You need to Login to access this page'
    };
    const expectedAction = {
      type: types.ADD_FLASH_MESSAGE,
      message
    };
    expect(actions.addFlashMessage(message)).toEqual(expectedAction)
  })
});

describe('actions', () => {
  it('should create an action to delete a message', () => {
    const id = 1;
    const expectedAction = {
      type: types.DELETE_FLASH_MESSAGE,
      id
    };
    expect(actions.deleteFlashMessage(id)).toEqual(expectedAction)
  })
});