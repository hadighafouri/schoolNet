import {combineReducers} from 'redux';
import {firestoreReducer} from 'redux-firestore';
import {firebaseReducer} from 'react-redux-firebase';
//-----------------------My Reducers--------------------------
import schoolsReducer from './schoolReducer';
import teacherReducer from './teacherReducer';
import refreshReducer from './pageReducer';
import authReducer from './authReducer';
import reqReducer from './reqReducer';
//--------------------------------------------------------------------
const rootReducer = combineReducers ({
  schools: schoolsReducer,
  teachers: teacherReducer,
  // requests: requestsReducer,
  auth: authReducer,
  refresh: refreshReducer,
  firebase: firebaseReducer,
  firestore: firestoreReducer,
  req: reqReducer,
  // selectedTeachers: selectedTeachersReducer,
});

export default rootReducer;
