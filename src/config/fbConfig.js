// Initialize Firebase
import firebase from 'firebase/app';
import 'firebase/firestore'; // make sure you add this for firestore
import 'firebase/auth';

export const config = {
  apiKey: 'AIzaSyAl9zzPdjym432OcirD_oTkxxRCA_hkPs4',
  authDomain: 'schoolsnet-2019.firebaseapp.com',
  databaseURL: 'https://schoolsnet-2019.firebaseio.com',
  projectId: 'schoolsnet-2019',
  storageBucket: 'schoolsnet-2019.appspot.com',
  messagingSenderId: '36663351292',
  appId: '1:36663351292:web:bdcbf632fd0cb40ddc0479',
  measurementId: 'G-J92CBNWQS4',
};
/* export const reduxFirebase = {
  userProfile: 'users',
  useFirestoreForProfile: true,
  enableLogging: false,
};
export default {firebase, reduxFirebase};
 */
firebase.initializeApp (config);
export default firebase;
