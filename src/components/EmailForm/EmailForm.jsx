import React from 'react';
import FlexBox from 'components/FlexBox';
// import {loginUser, getCurrentUser} from '../actions/auth';

import './EmailForm.sass';

export default class EmailForm extends React.Component {
  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    let email = this.refs.email.value;
    let password = this.refs.password.value;

    this.props.submitForm(email, password);
  }

  render(){
    let buttonText = this.props.formType !== "login" ? "Create an Account" : "Login";

    return (
      <FlexBox className="EmailForm-Container" direction="column" alignContent="center">
        <form className="EmailForm" onSubmit={this.handleSubmit}>
        <FlexBox direction="column" alignContent="center">
          <label>email</label>
          <input
            type="text"
            ref="email"
            name="email"
            onChange={this.handleChange}
            placeholder="email"/>
          <label>password</label>
          <input
            type="password"
            ref="password"
            name="password"
            onChange={this.handleChange}
            placeholder="password"/>
          <button
            onClick={this.handleSubmit}
            className="cta-button"
            type="submit">
            { buttonText }
            </button>
            </FlexBox>
        </form>
        </FlexBox>
    )
  }
}
