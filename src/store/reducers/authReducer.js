const authReducer = (state = null, action) => {
  if (action.type === 'LOGIN-SUCCESS') {
    console.log ('LOGING-HAPPEN');
    return {
      ...state,
    };
  } else if (action.type === 'LOGOUT_SUCCESS') {
    console.log ('LOGOUT_SUCCESS');
    return {
      state,
    };
  } else if (action.type === 'SIGNUP_SUCCESS') {
    console.log ('SIGNUP_SUCCESS');
    return state;
  } else return state;
};
export default authReducer;
