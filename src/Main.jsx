import React from 'react';
import Navbar from './components/navbar/Navbar';
import HomePage from './routes/home/pages/HomePage.jsx';

import './styles/main.sass';

export default class Main extends React.Component {

  render(){
    let mainContent = this.props.children ? React.cloneElement(
      this.props.children, Object.assign({}, this.props)) :
        <HomePage {... this.props }/>;
    return(
      <div>
        <Navbar {...this.props} />
        { mainContent }
      </div>
    );
  }
}
