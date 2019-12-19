//---------------------------------------------------
const refreshReducer = (refresh = false, action) => {
  if (action.type === 'RES') {
    return true;
  } else return false;
};
export default refreshReducer;
