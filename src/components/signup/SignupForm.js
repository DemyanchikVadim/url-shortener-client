import React from 'react';
import classnames from 'classnames';
import validateInput from '../validations/signup';

class SignupForm extends React.Component {
  state = {
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    errors: {},
    loading: false
  };

  handleChange = (e) => {
    if (!!this.state.errors[e.target.name]) {
      const errors = Object.assign({}, this.state.errors);
      delete errors[e.target.name];
      this.setState({
        [e.target.name]: e.target.value,
        errors
      });
    } else {
      this.setState({[e.target.name]: e.target.value});
    }
  };

  isValid() {
    const { errors, isValid } = validateInput(this.state);
    if (!isValid) {
      this.setState({errors});
    }
    return isValid;
  }

  handleSubmit = (e) => {
    e.preventDefault();

    if (this.isValid()) {
      this.setState({loading: true});
      this.props.userSignupRequest(this.state)
        .then(
        () => {
          this.setState({loading: false})
        },
        (err) => err.response.json().then(({errors}) => this.setState({errors, loading: false}))
      );
    }
  };

  render() {
    return (
      <form className="ui sign-up form" onSubmit={this.handleSubmit}>
        <h1>Create a new account</h1>

        <div className={classnames('field', {error: !!this.state.errors.username})}>
          <label>Username</label>
          <input
            value={this.state.username}
            onChange={this.handleChange}
            type="text"
            name="username"/>
          <span>{this.state.errors.username}</span>
        </div>

        <div className={classnames('field', {error: !!this.state.errors.email})}>
          <label>Email</label>
          <input
            value={this.state.email}
            onChange={this.handleChange}
            type="text"
            name="email"/>
          <span>{this.state.errors.email}</span>
        </div>

        <div className={classnames('field', {error: !!this.state.errors.password})}>
          <label>Password</label>
          <input
            value={this.state.password}
            onChange={this.handleChange}
            type="text"
            name="password"/>
          <span>{this.state.errors.password}</span>
        </div>

        <div className={classnames('field', {error: !!this.state.errors.confirmPassword})}>
          <label>Confirm password</label>
          <input
            value={this.state.confirmPassword}
            onChange={this.handleChange}
            type="text"
            name="confirmPassword"/>
          <span>{this.state.errors.confirmPassword}</span>
        </div>
        <button className="ui button blue" type="submit">Submit</button>
      </form>
    )
  }
}

SignupForm.propTypes = {
  userSignupRequest: React.PropTypes.func.isRequired
};

export default SignupForm;
