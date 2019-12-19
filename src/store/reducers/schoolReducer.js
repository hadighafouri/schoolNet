// ----------------------------------------------------
const schoolsReducer = (schools = [], action) => {
  // console.log (action.type);
  if (action.type === 'schoolsList') {
    return {...schools, schools: action.payload};
  } else return schools;
};
export default schoolsReducer;

//   //----------------------------------------------------
