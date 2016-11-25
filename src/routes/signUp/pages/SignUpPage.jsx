import React from 'react';
import FlexBox from 'components/FlexBox';
import EmailForm from 'components/EmailForm/EmailForm';

import './SignUpPage.sass';

class SignUpPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <FlexBox className="SignUpPage" direction="column" justify="center" alignItems="center">
        <h1>Create an Account</h1>
        <EmailForm formType="signup" submitForm={this.props.createNewUser}/>
      </FlexBox>
    )
  }
}

SignUpPage.defaultProps = {

};

SignUpPage.propTypes = {

};

export default SignUpPage;
