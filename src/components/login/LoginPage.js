import React from 'react';
import LoginForm from './LoginForm'

class LoginPage extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="login-page">
         <LoginForm />
        </div>
      </div>
    )
  }
}

export default LoginPage;
