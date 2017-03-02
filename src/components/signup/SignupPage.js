import React from 'react';
import SignupForm from './SignupForm';
import { connect } from 'react-redux';
import { userSignupRequest } from '../../actions/signupActions';
import { addFlashMessage } from '../../actions/messageActions';

class SignupPage extends React.Component {
  render() {
    const { addFlashMessage, userSignupRequest } = this.props;
    return (
      <div className="container">
        <div className="sign-up-page">
          <SignupForm
            userSignupRequest={userSignupRequest}
            addFlashMessage={addFlashMessage}
          />
        </div>
      </div>
    )
  }
}

SignupPage.propTypes = {
  userSignupRequest: React.PropTypes.func.isRequired
};

export default connect(null, { userSignupRequest, addFlashMessage })(SignupPage);
