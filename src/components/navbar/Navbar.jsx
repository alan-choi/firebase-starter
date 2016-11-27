import React from 'react';
import FlexBox from '../FlexBox';
import { Link } from 'react-router';
import './navbar.sass'

export default class Navbar extends React.Component{

  render(){

    return (
    <FlexBox className="Navbar" alignItems="center">
      <Link className="index-link" to="/">Website Name</Link>
      <Link to="/signup">sign up</Link>
      <div className="login-cta">
        {
          this.props.currentUser ?
            <a onClick={this.props.logOutUser}>logout</a> : <Link to="/login">login</Link>
        }
      </div>
    </FlexBox>
    )
  }
}
