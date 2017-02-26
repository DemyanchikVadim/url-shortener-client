import axios from 'axios';

import setAuthorizationToken from '../utils/setAuthorizationToken'

export function login(data) {
  return dispatch => {
    return axios.post('/api/auth', data)
      .then(res => {
      console.log(res);
      const token = res.data.token;
      localStorage.setItem('jwtToken', token);
      setAuthorizationToken(token);
    })
  }
}

