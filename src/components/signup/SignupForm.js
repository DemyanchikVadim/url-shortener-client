import React from 'react';

class SignupForm extends React.Component {
  state = {
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  };

  handleChange = (e) => {
      this.setState({[e.target.name]: e.target.value});
  };

  handleSubmit = (e) => {
    e.preventDefault();

    console.log(this.state)
  };

  render() {
    return (
      <form className="ui sign-up form" onSubmit={this.handleSubmit}>
        <h1>Create a new account</h1>

        <div className="field">
          <label>Username</label>
          <input
            value={this.state.username}
            onChange={this.handleChange}
            type="text"
            name="username" />
        </div>

        <div className="field">
          <label>Email</label>
          <input
            value={this.state.email}
            onChange={this.handleChange}
            type="text"
            name="email" />
        </div>

        <div className="field">
          <label>Password</label>
          <input
            value={this.state.password}
            onChange={this.handleChange}
            type="text"
            name="password" />
        </div>

        <div className="field">
          <label>Confirm password</label>
          <input
            value={this.state.confirmPassword}
            onChange={this.handleChange}
            type="text"
            name="confirmPassword" />
        </div>
        <button className="ui button" type="submit">Submit</button>
      </form>
    )
  }
}

export default SignupForm;
