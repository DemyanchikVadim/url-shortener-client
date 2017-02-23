import { combineReducers } from 'redux';
import shortLink from './shortLink'
import links from './links';

export default combineReducers({
  links, shortLink
});
