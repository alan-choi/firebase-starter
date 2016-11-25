import React from 'react';
import Navbar from './components/navbar/Navbar';
import FlexBox from './components/FlexBox';
import CreateTripPage from './routes/createTrip/pages/CreateTripPage.jsx';

import './styles/main.sass';

export default class Main extends React.Component {

  render(){
    let mainContent = this.props.children ? React.cloneElement(
      this.props.children, Object.assign({}, this.props)) :
        <CreateTripPage {... this.props }/>;

    return(
      <FlexBox className="app" direction="column" alignContent="center">
        <Navbar {...this.props} />
        { mainContent }
      </FlexBox>
    );
  }
}
