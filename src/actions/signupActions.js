function handleResponse(response) {
  if (response.ok) {
    return response.json();
  } else {
    let error = new Error(response.statusText);
    error.response = response;
    throw error;
  }
}

export function userSignupRequest(userData) {
  return dispatch => {
    return fetch('/api/users', {
      method: 'post',
      body: JSON.stringify(userData),
      headers: {
        "Content-Type": "application/json"
      }
    }).then(handleResponse)
  }
}
