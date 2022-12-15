import {
  GET_ALL_NOTES,
  CREATE_NOTE,
  GET_NOTE,
  DELETE_NOTE,
} from "../actions/noteActionTypes.js";

const initialState = {
  notes: [],
};

const noteReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_NOTES:
      return { ...state, notes: action.payload };
    case DELETE_NOTE:
      return {
        ...state,
        notes: state.filter((id) => id != action.payload._id),
      };
    default:
      return state;
  }
};
export default noteReducer;
