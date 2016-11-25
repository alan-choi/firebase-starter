// import * as types from 'constants/actions';

const postReducer = (state = {}, action) => {
  switch (action.type) {
    case "RECEIVED_POST":
      console.log("REDUCING POST");
      return {...state, currentPostContent: action.post.raw};
    default:
      return state;
  }
};

export default postReducer;
