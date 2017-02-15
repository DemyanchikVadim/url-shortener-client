export const SET_LINKS = 'SET_LINKS';
export const ADD_LINK = 'ADD_LINK';

function handleResponse(response) {
  if (response.ok) {
    return response.json();
  } else {
    let error = new Error(response.statusText);
    error.response = response;
    throw error;
  }
}

export function setLinks(links) {
  return {
    type: SET_LINKS,
    links
  };
}

export function addLink(link) {
  return {
    type: ADD_LINK,
    link
  }
}

export function saveLink(data) {
  return dispatch => {
    return fetch('/links', {
      method: 'post',
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    }).then(handleResponse)
    .then(data => dispatch(addLink(data)));
  }
}

export function fetchLinks() {
  return dispatch => {
    fetch('/links')
    .then(res => res.json())
    .then(data => dispatch(setLinks(data)));
  };
}
