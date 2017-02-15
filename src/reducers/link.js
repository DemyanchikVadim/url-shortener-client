import { ADD_LINK } from '../actions/AppActions';

export default function link(state = [], action = {}) {
  switch (action.type) {
    case ADD_LINK:
      return action.link;
    default: return state;
  }
}
