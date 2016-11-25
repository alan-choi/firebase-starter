// import fireConfig from '../../config';
// import Firebase from 'firebase';
// Firebase.initializeApp(fireConfig);
//
// const fireRef = new Firebase(fireConfig);

// export const loginUser = (email, password)=>{
//   Firebase.auth().signInWithEmailAndPassword(email, password)
//     .then((res)=>{
//       console.log("successfully logged in user", res);
//     })
//     .catch((error)=>{
//     let errorCode = error.code;
//     let errorMessage = error.message;
//     console.log(error)
//   })
// }
//
// export const getCurrentUser = new Promise((resolve, reject) => {
//   return Firebase.auth().currentUser;
// })
//
// export const signOutUser = () => {
//   return Firebase.auth().signOut();
// }
