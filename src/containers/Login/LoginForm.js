import React from 'react';
import classnames from 'classnames';
import validateInput from '../../validations/login';
import { Redirect } from 'react-router-dom';
import { login } from '../../actions/authActions';
import { connect } from 'react-redux';

class LoginForm extends React.Component {
  state = {
    identifier: '',
    password: '',
    errors: {},
    loading: false,
    redirect: false
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
      this.props.login(this.state)
        .then(
          () => {
            this.setState({loading: false, redirect: true})
          })
        .catch(
          (err) => {
            this.setState({ errors: err.response.data.errors, loading: false })
          });
    }
  };

  render() {
    if (this.state.redirect) {
      return (
         <Redirect to="/" />
      )
    } else

    return (
      <form className="ui login form" onSubmit={this.handleSubmit}>
        <h1>Log in</h1>

        {this.state.errors.global && <div className="ui negative message"><p>{this.state.errors.global}</p></div> }

        <div className={classnames('field', {error: !!this.state.errors.identifier})}>
          <label>Username / Email</label>
          <input
            value={this.state.identifier}
            onChange={this.handleChange}
            type="text"
            name="identifier"/>
          <span>{this.state.errors.identifier}</span>
        </div>

        <div className={classnames('field', {error: !!this.state.errors.password})}>
          <label>Password</label>
          <input
            value={this.state.password}
            onChange={this.handleChange}
            type="password"
            name="password"/>
          <span>{this.state.errors.password}</span>
        </div>

        <button className="ui button blue" type="submit">Submit</button>
      </form>
    )
  }
}

LoginForm.propTypes = {
  login: React.PropTypes.func.isRequired
};

export default connect(null, { login })(LoginForm);
