import { SET_LINKS, LINK_FETCHED, LINK_UPDATED, LINK_DELETED } from '../constants/AppConstants';

export default function links(state = [], action = {}) {
  switch (action.type) {
    case LINK_DELETED:
      return state.filter(item => item._id !== action.linkId);
    
    case LINK_UPDATED:
      return state.map(item => {
        if (item._id === action.link._id) return action.link;
        return item;
      });
    
    case LINK_FETCHED:
      const index = state.findIndex(item => item._id === action.link._id);
      if (index > -1) {
        return state.map(item => {
          if (item._id === action.link._id) return action.link;
          return item;
        });
      } else {
        return [
          ...state,
          action.link
        ]
      }
      
    case SET_LINKS:
      return action.links;
    
    default: return state;
  }
}
