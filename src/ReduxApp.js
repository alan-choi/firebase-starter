import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// import * as actions from './actions/index';
import * as actions from './actions/actions';
import Main from './Main';


function mapStateToProps(state){
  return {
    currentUser: state.currentUser
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators(actions, dispatch);
}

const ReduxApp = connect(mapStateToProps, mapDispatchToProps)(Main);

export default ReduxApp;
