import Firebase from 'firebase';
import config from '../../config/firebase.config.js';

Firebase.initializeApp(config);

export const getCurrentUser = () => {
  let currentUser = Firebase.auth().currentUser;
  console.log("found current User", currentUser);
  return currentUser;
  // return dispatch()
}

export const loginUser = (email, password) =>
  Firebase.auth().signInWithEmailAndPassword(email, password);


export const logoutUser = () => Firebase.auth().signOut();

export const createNewUser = () =>
  Firebase.auth().createUserWithEmailAndPassword(email, password);
