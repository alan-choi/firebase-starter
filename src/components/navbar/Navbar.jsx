import React from 'react';
import { Link } from 'react-router';
import './navbar.sass'
export default class Navbar extends React.Component{

  render(){
    return (
    <div className="Navbar">
      <p>home</p>
      <Link to="/admin">about</Link>
      <p>contact</p>
      <p onClick={this.props.logOutUser}>Log Out</p>
    </div>
    )
  }
}
