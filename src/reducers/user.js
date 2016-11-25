import { types } from 'constants/actions';

const currentUser = (state = {}, action) => {
  switch (action.type) {
    case types.RECEIVED_USER:
      return action.user;
    case types.LOGOUT_USER:
      action.user = {};
      return action.user
    default:
      return state;
  }
};

export default currentUser;
