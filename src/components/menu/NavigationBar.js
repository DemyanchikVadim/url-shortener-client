import React from 'react';
import { Link, Route } from 'react-router-dom';

const ActiveLink = ({ label, to, activeOnlyWhenExact }) => (
  <Route path={to} exact={activeOnlyWhenExact} children={({ match }) => (
    <Link className={match ? 'active item' : 'item'} to={to}>{label}</Link>
  )} />
);

class NavigationBar extends React.Component {
  render() {
    return (
      <div className="ui container">
        <div className="ui menu">
          <ActiveLink activeOnlyWhenExact to="/" label="Home" />
          <ActiveLink activeOnlyWhenExact to="/links" label="Links" />
           <div className="right menu">
            <ActiveLink activeOnlyWhenExact to="/signup" label="Sign up" />
            <ActiveLink activeOnlyWhenExact to="/login" label="Log In" />
           </div>
        </div>
        {this.props.children}
      </div>
    )
  }
}

export default NavigationBar;
