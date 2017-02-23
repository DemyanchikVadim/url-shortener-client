import React from 'react';
import LinksPage from './links/LinksPage';
import LinkForm from './shortener/LinkForm';
import NavigationBar from './menu/NavigationBar';
import SignupPage from './signup/SignupPage';
import { Route } from 'react-router-dom';


class App extends React.Component {
  render() {
    return (
      <NavigationBar>
        <Route exact path="/" component={LinkForm} />
        <Route path="/link/:_id" component={LinkForm} />
        <Route path="/links" component={LinksPage} />
        <Route path="/signup" component={SignupPage} />
      </NavigationBar>
    );
  }
}

export default App;
