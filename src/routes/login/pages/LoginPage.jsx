import React from 'react';
import FlexBox from 'components/FlexBox';
import EmailForm from 'components/EmailForm/EmailForm';

import './LoginPage.sass';

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <FlexBox className="LoginPage" direction="column" alignItems="center">
        <h1>Login to your account.</h1>
        <EmailForm formType="login" submitForm={this.props.loginUser}/>
      </FlexBox>
    )
  }
}

LoginPage.defaultProps = {

};

LoginPage.propTypes = {

};

export default LoginPage;
