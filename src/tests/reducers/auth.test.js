import reducer from '../../reducers/auth'
import * as types from '../../constants/AppConstants'

describe('auth reducer', () => {
  it('should return the initial state', () => {
    expect(
      reducer(undefined, {})
    ).toEqual(
      {
        isAuthenticated: false,
        user: {}
      }
    )
  });

  it('should handle SET_CURRENT_USER', () => {
    expect(
      reducer({}, {
        type: types.SET_CURRENT_USER,
        user: { token: 'jwt' }
      })
    ).toEqual(
        {
          isAuthenticated: true,
          user: { token: 'jwt' }
        }
    );

  })
});