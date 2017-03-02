import axios from 'axios';
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

export function saveLink(data) {
  return dispatch => {
    return axios.post('/api/link', data)
      .then(res => dispatch(addLink(res.data)));
  }
}

export function updateLink(data) {
  return dispatch => {
    return axios.put(`/api/links/${data._id}`, data)
      .then(res => dispatch(linkUpdated(res.data)));
  }
}

export function deleteLink(id) {
  return dispatch => {
    return axios.delete(`/api/links/${id}`)
      .then(data => dispatch(linkDeleted(id)));
  }
}

export function fetchLinks() {
  return dispatch => {
    axios.get('/api/links')
      .then(res => dispatch(setLinks(res.data)));
  };
}

export function fetchLink(id) {
  return dispatch => {
    axios.get(`/api/links/${id}`)
      .then(res => dispatch(linkFetch(res.data)));
  };
}
