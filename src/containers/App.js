import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../actions/authActions';

import LinksPage from './Links/LinksPage';
import LinkForm from './Shortener/ShortenerForm';
import SignupPage from '../components/Signup/SignupPage';
import LoginPage from '../components/Login/LoginPage';
import NotFound from '../components/Notfound/NotFound';
import FlashMessagList from './Flash/FlashMessagesList';

import requireAuth from '../utils/requireAuth';

const ActiveLink = ({ label, to, activeOnlyWhenExact }) => (
  <Route path={to} exact={activeOnlyWhenExact} children={({ match }) => (
    <Link className={match ? 'active item' : 'item'} to={to}>{label}</Link>
  )} />
);

class App extends React.Component {
  logout = (e) => {
    e.preventDefault();

    this.props.logout();
  };

  render() {
    const { isAuthenticated } = this.props.auth;

    const userLinks = (
      <div className="ui menu">
        <ActiveLink activeOnlyWhenExact to="/" label="Home" />
        <ActiveLink activeOnlyWhenExact to="/links" label="Links" />
        <div className="right menu">
          <a className="item" href="#" onClick={this.logout} >Logout</a>
        </div>
      </div>
    );

    const guestLinks = (
      <div className="ui menu">
        <ActiveLink activeOnlyWhenExact to="/links" label="Links" />
        <div className="right menu">
          <ActiveLink activeOnlyWhenExact to="/signup" label="Sign up" />
          <ActiveLink activeOnlyWhenExact to="/login" label="Log In" />
        </div>
      </div>
    );

    return (
      <div className="ui container">
        { isAuthenticated ? userLinks : guestLinks }
        <FlashMessagList />
        <Switch>
          <Route exact path="/" component={requireAuth(LinkForm)} />
          <Route path="/link/:_id" component={requireAuth(LinkForm)} />
          <Route path="/links" component={LinksPage} />
          <Route path="/signup" component={SignupPage} />
          <Route path="/login" component={LoginPage} />
          <Route component={NotFound} />
        </Switch>
      </div>
    )
  }
}

App.propTypes = {
  auth: React.PropTypes.object.isRequired,
  logout: React.PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    auth: state.auth,
  };
}

export default connect(mapStateToProps, { logout })(App);
