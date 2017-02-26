import React from 'react';
import LinksPage from './links/LinksPage';
import LinkForm from './shortener/LinkForm';
import NavigationBar from './menu/NavigationBar';
import SignupPage from './signup/SignupPage';
import LoginPage from './login/LoginPage';
import { Route } from 'react-router-dom';


class App extends React.Component {
  render() {
    return (
      <NavigationBar>
        <Route exact path="/" component={LinkForm} />
        <Route path="/link/:_id" component={LinkForm} />
        <Route path="/links" component={LinksPage} />
        <Route path="/signup" component={SignupPage} />
        <Route path="/login" component={LoginPage} />
      </NavigationBar>
    );
  }
}

export default App;
