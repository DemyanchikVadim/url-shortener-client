import { Link, Route } from 'react-router-dom';
import React from 'react';
import LinksPage from './LinksPage';

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <h2>
          <Link to="/links" >Links</Link>
        </h2>
      </div>
      <Route path="/links" component={LinksPage} />
    </div>
  );
}
export default App;
