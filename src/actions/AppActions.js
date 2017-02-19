import { ADD_LINK, SET_LINKS, LINK_FETCHED, LINK_UPDATED, LINK_DELETED } from '../constants/AppConstants';

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

export function linkFetch(link) {
  return {
    type: LINK_FETCHED,
    link
  }
}

export function linkUpdated(link) {
  return {
    type: LINK_UPDATED,
    link
  }
}

export function linkDeleted(linkId) {
  return {
    type: LINK_DELETED,
    linkId
  }
}

function handleResponse(response) {
  if (response.ok) {
    return response.json();
  } else {
    let error = new Error(response.statusText);
    error.response = response;
    throw error;
  }
}

export function saveLink(data) {
  return dispatch => {
    return fetch('/api/link', {
      method: 'post',
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    }).then(handleResponse)
    .then(data => dispatch(addLink(data)));
  }
}

export function updateLink(data) {
  return dispatch => {
    return fetch(`/api/links/${data._id}`, {
      method: 'put',
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    }).then(handleResponse)
    .then(data => dispatch(linkUpdated(data)));
  }
}

export function deleteLink(id) {
  return dispatch => {
    return fetch(`/api/links/${id}`, {
      method: 'delete',
      headers: {
        "Content-Type": "application/json"
      }
    }).then(handleResponse)
    .then(data => dispatch(linkDeleted(id)));
  }
}

export function fetchLinks() {
  return dispatch => {
    fetch('/api/links')
    .then(res => res.json())
    .then(data => dispatch(setLinks(data)));
  };
}

export function fetchLink(id) {
  return dispatch => {
    fetch(`/api/links/${id}`)
    .then(res => res.json())
    .then(data => dispatch(linkFetch(data)));
  };
}
