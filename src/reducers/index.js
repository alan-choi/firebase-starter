import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import user from './user';
import postReducer from './posts';

// Combine reducers with routeReducer which keeps track of
// router state
const rootReducer = combineReducers({
  user, postState: postReducer ,routing: routerReducer
});

export default rootReducer;
