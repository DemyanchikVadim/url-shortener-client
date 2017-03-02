import { ADD_LINK } from '../constants/AppConstants';

export default function shortLink(state = [], action = {}) {
  switch (action.type) {
    case ADD_LINK:
      return action.link;
    default: return state;
  }
}
