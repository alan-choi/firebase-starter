import React from 'react';
// import {loginUser, getCurrentUser} from '../actions/auth';


export default class LoginForm extends React.Component {
  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    let email = this.refs.email.value;
    let password = this.refs.password.value;
    // this.props.processLogin();
    this.props.loginUser(email, password)
  }

  handleClick(){
    this.props.getCurrentUser();
  }

  render(){
    return (
      <div>
        <form className="LoginForm" onSubmit={this.handleSubmit}>
          <input
            type="text"
            ref="email"
            name="email"
            onChange={this.handleChange}
            placeholder="email"/>
          <input
            type="password"
            ref="password"
            name="password"
            onChange={this.handleChange}
            placeholder="password"/>
          <input
            type="submit" />
        </form>
        <button onClick={this.handleClick}>get user</button>
      </div>
    )
  }
}
