export const SET_LINKS = 'SET_LINKS';

export function setLinks(links) {
  return {
    type: SET_LINKS,
    links
  };
}

export function fetchLinks() {
  return (dispatch) => {
    fetch('http://localhost:8080/links')
    .then(res => res.json())
    .then(data => dispatch(setLinks(data)));
  };
}
