import { combineReducers } from 'redux';
import shortLink from './shortLink'
import links from './links';
import auth from './auth';
import flashMessages from './flashMessages';

export default combineReducers({
  links,
  shortLink,
  auth,
  flashMessages
});
