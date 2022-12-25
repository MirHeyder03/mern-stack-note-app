import { LOGIN, REGISTER, LOGOUT } from "../actions/userActionTypes";

const userState = {
  user: null,
};
const userReducer = (state = userState, action) => {
  switch (action.type) {
    case LOGIN:
      return { user: action.payload };
    case LOGOUT:
      return { user: null };
    case REGISTER:
      return {};
    default:
      return state;
  }
};
export default userReducer;
