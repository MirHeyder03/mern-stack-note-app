import { combineReducers } from "redux";
import noteReducer from "./noteReducer.js";
import userReducer from "./userReducer.js";
const reducers = combineReducers({
  notes: noteReducer,
  user: userReducer,
});
export default reducers;
