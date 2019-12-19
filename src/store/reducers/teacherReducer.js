const teacherReducer = (teachers = [], action) => {
  if (action.type === 'teacherList') {
    console.log ('TCL: teacherReducer -> action.payload', action.payload);
    // return action.payload;
    return {...teachers, teachers: action.payload};
    // return [...teachers, action.payload];
  } else if (action.type === 'RES') {
    return teachers;
  } else return teachers;
};
export default teacherReducer;
// //-------------------------------------------------------------------------
// const selectedTeachersReducer = (selectedTeachers = [], action) => {
//   const checkId = id => {
//     let v;
//     v = selectedTeachers.find (e => {
//       if (e.id === id) return true;
//     });
//     return typeof v === 'undefined' ? true : false;
//   };
//   if (action.type === 'add' && checkId (action.payload.id)) {
//     return [...selectedTeachers, action.payload];
//   } else if (action.type === 'delete') {
//   } else if (action.type === 'submit') {
//   } else return selectedTeachers;
// };
