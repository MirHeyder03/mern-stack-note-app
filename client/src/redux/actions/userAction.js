import { LOGIN, REGISTER, LOGOUT } from "./userActionTypes.js";
import axios from "axios";

export const login = (user) => async (dispatch) => {
  try {
    const response = await axios.post("/api/v1/user/login", user);
    dispatch({ type: LOGIN, payload: response.data });
  } catch (error) {
    console.log(error.message);
  }
};
export const register = (user) => async (dispatch) => {
  try {
    const response = await axios.post("/api/v1/user/register", user);
    dispatch({ type: REGISTER, payload: response.data });
  } catch (error) {
    console.log(error.message);
  }
};
export const logout = () => async (dispatch) => {
  try {
    localStorage.removeItem("auth");
    dispatch({ type: LOGOUT });
    dispatch({ type: "GET_ALL_NOTES", payload: null });
  } catch (error) {
    console.log(error.message);
  }
};
