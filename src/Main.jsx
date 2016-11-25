import React from 'react';
import Navbar from './components/navbar/Navbar';
import FlexBox from './components/FlexBox';
import CreateTripPage from './routes/createTrip/pages/CreateTripPage.jsx';
import { getCurrentUser } from 'api/FirebaseAuth';

import './styles/main.sass';

class Main extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleCurrentUser = this.handleCurrentUser.bind(this);
  }

  componentDidMount() {
    getCurrentUser();
    console.log(document.cookie)
  }

  componentWillReceiveProps(newProps) {
    if (newProps.currentUser !== this.props.currentUser) {
      this.handleCurrentUser(newProps.currentUser);
    }
  }

  handleCurrentUser(currentUser) {
    if(currentUser) {
      console.log(currentUser);
      let token = currentUser.refreshToken;
      document.cookie = "user="+"token" + ":" + token;
      this.context.router.push('/createtrip');
    } else {
      this.context.router.push('/login');
    }
  }

  render() {
    let mainContent = this.props.children ? React.cloneElement(
      this.props.children, Object.assign({}, this.props)) :
        <CreateTripPage {... this.props }/>;

    return(
      <FlexBox className="app" direction="column" alignContent="center">
        <Navbar {...this.props} />
        { mainContent }
        <button onClick={getCurrentUser}></button>
      </FlexBox>
    );
  }
}

Main.contextTypes = {
  router: React.PropTypes.object.isRequired
}

export default Main;
