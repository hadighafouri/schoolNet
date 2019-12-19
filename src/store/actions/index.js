import * as types from './types';
import axios from 'axios';
const root = 'http://localhost:5000/';

//---------------------School Action-------------------------------------------
export const registerAction = newSchool => async dispatch => {
  await axios.post ('root' + `school/register/`, newSchool).then (res => {
    console.log ('TCL: res Register:', res);
  });
};

export const fetchSchoolsAction = () => async dispatch => {
  await axios.get (root + 'school/').then (res => {
    if (res.data.length > 0) {
      // console.log (res.data);
      const schools = res.data;
      console.log ('fetch was successfull schools: ');
      // console.log (schools);
      dispatch ({type: 'schoolsList', payload: schools});
    } else console.log ('fetch failed...');
  });
};

//---------------------Teacher Action-------------------------------------------

//----------Fetch All
export const fetchTeacherAction = (type, data) => async dispatch => {
  if (type === null) {
    await axios.get (root + 'teacher/').then (res => {
      if (res.data.length > 0) {
        const teachers = res.data;
        console.log ('fetch was successfull Teachers: ');
        // console.log (teachers);
        dispatch ({type: 'teacherList', payload: teachers});
      } else console.log ('fetch failed for Teachers...');
    });
    //-------------Fetch bySchoolId
  } else if (type === 'bySchoolId') {
    const schoolId = data;

    await axios.get (root + `teacher/${schoolId}`).then (res => {
      if (res.data.length > 0) {
        const teachers = res.data;
        dispatch ({type: 'teacherList', payload: teachers});
      } else console.log ('fetch failed for Teachers...');
    });
  }
};
//----------Fetch by zip---------------------------------
export const fetchTeacherByZipAction = zip => async (
  dispatch,
  getState,
  {getFirebase, getFirestore}
) => {
  let teacherList = [];
  const firestore = getFirestore ();
  await firestore
    .collection ('teachers')
    .where ('zip', '==', zip)
    .get ()
    .then (arr => {
      arr.docs.forEach (doc => {
        let item = doc.data ();
        console.log ('TCL: item', item);
        item.id = doc.id;

        let schoolName;
        firestore
          .collection ('schools')
          .doc (item.schoolId)
          .get ()
          .then (school => {
            item.schoolName = school.data ().name;
          });
        item.schoolName = schoolName;

        teacherList.push (item);
      });
      console.log ('TCL: teacherList', teacherList);
      dispatch ({type: 'teacherList', payload: teacherList});
    });
};
//-----------Update only Schedule

//-------Add------------------------
export const teacherAddAction = (newTeacher, schoolId) => async (
  dispatch,
  getState,
  {getFirebase, getFirestore}
) => {
  const firestore = getFirestore ();
  firestore
    .collection ('teachers')
    .add ({
      ...newTeacher,
      name: newTeacher.name,
      gender: newTeacher.gender,
      i_q: newTeacher.i_q,
      zip: newTeacher.zip,
      avbl: newTeacher.avbl,
      schoolId: schoolId,
    })
    .then (() => {
      dispatch ({type: 'DOCTOR_ADDED'});
    });
  // await axios
  //   .post (root + 'teacher/add', newTeacher)
  //   .then (res => console.log (res.data));
};
//-------Updata ----------------
export const updateTeacherAction = (teacher, teacherId) => async (
  dispatch,
  getState,
  {getFirebase, getFirestore}
) => {
  console.log ('TCL.Action: teacher', teacher);
  const firestore = getFirestore ();

  firestore.collection ('teachers').doc (teacher.teacherId).update ({
    name: teacher.name,
    avbl: teacher.avbl,
    i_q: teacher.i_q,
    gender: teacher.gender,
    zip: teacher.zip,
  });
  // await axios
  //   .put (root + `teacher/${teacher.teacherId}`, teacher)
  //   .then (res => {
  //     console.log ('TCL: res', res.data);
  //     dispatch ({type: 'RES', payload: res.data});
  //   });
};

//---------------------Req Action--------------------------------------------
//-----------------------------------------------------------------
export const addRegAction = newReq => (
  dispatch,
  getState,
  {getFirebase, getFirestore}
) => {
  const firestore = getFirestore ();
  firestore
    .collection ('requests')
    .add ({
      // ...newReq,
      reqFor: newReq.toSchool,
      reqFrom: newReq.fromSchool,
      state: 0,
      teacherId: newReq.teacherId,
    })
    .then (() => {
      dispatch ({type: 'DOCTOR_ADDED'});
    });
};
//------------------FetchReqAction
export const fetchReqAction = teacherId => (
  dispatch,
  getState,
  {getFirebase, getFirestore}
) => {
  const firestore = getFirestore ();
  firestore
    .collection ('requests')
    .where ('teacherId', '==', teacherId)
    .get ()
    .then (req => {
      req.docs.forEach (doc => {
        console.log ('TCL: payload:req.data', doc.data ());
        dispatch ({type: 'fetchReq', payload: doc.data ()});
      });
    });
};
//--------------------------Req Update-----------------------
export const updateReqAction = (reqId, comment) => async dispatch => {
  //To accept a Req
  if (comment === 'accept') {
    await axios.put (root + `request/${reqId}`).then (res => {
      console.log ('TCL: update Req: ', res.data);
    });
  }
};
