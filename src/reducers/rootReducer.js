import { combineReducers } from 'redux';
import shortLink from './shortLink'
import links from './links';
import auth from './auth';

export default combineReducers({
  links,
  shortLink,
  auth
});
