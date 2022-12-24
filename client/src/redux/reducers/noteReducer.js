import {
  GET_ALL_NOTES,
  CREATE_NOTE,
  GET_NOTE,
  DELETE_NOTE,
  UPDATE_NOTE,
} from "../actions/noteActionTypes.js";

const notesState = {
  notes: [],
  note: {},
  error: "",
};

const noteReducer = (state = notesState, action) => {
  switch (action.type) {
    case GET_ALL_NOTES:
      return { notes: action.payload };
    case DELETE_NOTE:
      return {
        notes: state.notes.filter((note) => note._id !== action.payload),
      };
    case CREATE_NOTE:
      return {
        notes: [action.payload, ...state.notes],
        error: action.payload.error,
      };
    case UPDATE_NOTE:
      return { note: [action.payload, ...state.note] };
    case GET_NOTE:
      return {
        note: action.payload,
      };
    default:
      return state;
  }
};
export default noteReducer;
