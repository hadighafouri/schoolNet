import * as types from './types';

export const authAction = credentials => (
  dispatch,
  getState,
  {getFirebase}
) => {
  const firebase = getFirebase ();
  firebase
    .auth ()
    .signInWithEmailAndPassword (credentials.email, credentials.password)
    .then (() => {
      dispatch ({
        type: types.LOGIN_SUCCESS,
      });
    })
    .catch (err => {
      dispatch ({type: 'LOGIN_ERROR', err});
    });
};
//------------------------------------------------------
export const logOutAction = () => (dispatch, getState, {getFirebase}) => {
  const firebase = getFirebase ();
  firebase.auth ().signOut ().then (() => {
    dispatch ({
      type: types.LOGOUT_SUCCESS,
    });
  });
};
//------------------------------------------------------
export const signUpAction = newUser => (
  dispatch,
  getState,
  {getFirebase, getFirestore}
) => {
  const firebase = getFirebase ();
  const firestore = getFirestore ();
  firebase
    .auth ()
    .createUserWithEmailAndPassword (newUser.email, newUser.password)
    .then (res => {
      console.log ('TCL: res', res.user.uid);
      console.log ('TCL: firestore', firestore);
      return firestore.collection ('schools').doc (res.user.uid).set ({
        name: newUser.schoolName,
        directorName: newUser.directorName,
        address: newUser.address,
        zip: newUser.zip,
      });
    })
    .then (() => {
      console.log ('Document successfully written!');
    })
    .catch (err => {
      console.error ('Error writing document: ', err);
    });
};
