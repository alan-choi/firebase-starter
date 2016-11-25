// import fireConfig from 'config/firebase.config.js';
import Firebase from 'firebase';
// Firebase.initializeApp(fireConfig);

// const database = Firebase.database();
// var userId = firebase.auth().currentUser.uid;
// return firebase.database().ref('/users/' + userId).once('value').then(function(snapshot) {
//   var username = snapshot.val().username;
//   // ...
// });

function setCurrentPost(post) {
  console.log("RECEIVED CURRENT POST", post);
  return {
    type: "RECEIVED_POST",
    post
  }
}

function receiveDataPost(res){
  console.log("POST SUCCESS!", res);
  return {
    type: "POST_SUCCESS",
    res
  }
}

function signOutUser(){
  return Firebase.auth().signOut();
}

function receiveCurrentUser(user) {
  console.log("RECEIVED USER", user);
  return {
    type: "LOGIN_USER",
    user
  }
}

function displayError(err) {
  console.log("ERROR", err);
  return {
    type: "ERROR",
    err
  }
}

export const getOnePost = (postId) => {
  console.log("GETTING ONE POST", postId);
  return dispatch => {
    return Firebase.database().ref('posts/'+ postId).once('value')
      .then((snapshot) => {
        let post = snapshot.val()
        dispatch(setCurrentPost(post))})
      .catch((err) => dispatch(displayError(err)))
  }
}

export const submitPost = (postId, raw) => {
  console.log("SUBMITTING POST", raw);
  return dispatch => {
    let data = {
      raw: raw
    }
    return Firebase.database().ref('posts/'+postId).set(data)
      .then((res) => dispatch(receiveDataPost(res)))
      .catch((err) => dispatch(displayError(err)))
  }
}

export const loginUser = (email, password) => {
  console.log("LOGGING IN USER");
  return dispatch => {
    return Firebase.auth().signInWithEmailAndPassword(email, password)
      .then((res) => dispatch(receiveCurrentUser(res)))
      .catch((err) => dispatch(displayError(err)))
  }
}

export const getCurrentUser = () => {
  let currentUser = Firebase.auth().currentUser;
  console.log("found current User", currentUser);
  return currentUser;
  // return dispatch()
}

export const logOutUser = () => {
  console.log("LOGGING OUT USER");
  return dispatch => {
    return Firebase.auth().signOut()
      .then(()=> dispatch(receiveCurrentUser(null)))
      .catch((err) => dispatch(displayError(err)))
  }
}
