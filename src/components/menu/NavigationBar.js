import React from 'react';
import { Link, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../../actions/authActions';

const ActiveLink = ({ label, to, activeOnlyWhenExact }) => (
  <Route path={to} exact={activeOnlyWhenExact} children={({ match }) => (
    <Link className={match ? 'active item' : 'item'} to={to}>{label}</Link>
  )} />
);

class NavigationBar extends React.Component {

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
        <ActiveLink activeOnlyWhenExact to="/" label="Home" />
        <div className="right menu">
          <ActiveLink activeOnlyWhenExact to="/signup" label="Sign up" />
          <ActiveLink activeOnlyWhenExact to="/login" label="Log In" />
        </div>
      </div>
    );

    return (
      <div className="ui container">
        { isAuthenticated ? userLinks : guestLinks }
        {this.props.children}
      </div>
    )
  }
}

NavigationBar.propTypes = {
  auth: React.PropTypes.object.isRequired,
  logout: React.PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
   auth: state.auth
  };
}

export default connect(mapStateToProps, { logout })(NavigationBar);
