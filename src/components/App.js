import React from 'react';
import LinksPage from './LinksPage';
import LinkForm from './LinkForm';
import { Link, Route } from 'react-router-dom';

const ActiveLink = ({ label, to, activeOnlyWhenExact }) => (
  <Route path={to} exact={activeOnlyWhenExact} children={({ match }) => (
    <Link className={match ? 'active item' : 'item'} to={to}>{label}</Link>
  )} />
);

class App extends React.Component {
  render() {
    return (
      <div className="ui container">
        <div className="ui two item menu">
          <ActiveLink activeOnlyWhenExact to="/" label="Home" />
          <ActiveLink activeOnlyWhenExact to="/links" label="Links" />
        </div>
        
        <Route exact path="/" component={LinkForm} />
        <Route path="/links" component={LinksPage} />
      </div>
    );
  }
}

export default App;
