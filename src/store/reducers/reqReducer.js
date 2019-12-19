// ----------------------------------------------------
const reqReducer = (req = null, action) => {
  // console.log (action.type);
  if (action.type === 'fetchReq') {
    return {req: action.payload};
  } else return req;
};
export default reqReducer;

//   //----------------------------------------------------
