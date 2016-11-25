import React from 'react';
import Navbar from './components/navbar/Navbar';
import AdminPage from './pages/AdminPage';

import './styles/main.sass';

export default class Main extends React.Component {

  render(){
    return(
      <div>
        <Navbar {...this.props} />
        { React.cloneElement(this.props.children, this.props) }
      </div>
    );
  }
}
