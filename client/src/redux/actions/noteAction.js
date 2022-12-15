import axios from "axios";
import {
  GET_ALL_NOTES,
  CREATE_NOTE,
  GET_NOTE,
  DELETE_NOTE,
} from "./noteActionTypes";
//! get all notes
export const getAllNotes = () => async (dispatch) => {
  try {
    const response = await axios.get(`http://localhost:5000/api/v1/notes`);
    dispatch({
      type: GET_ALL_NOTES,
      payload: response.data,
    });
  } catch (error) {}
};
//! create a note
export const createNote = () => async (dispatch) => {
  try {
    const response = await axios.post(`http://localhost:5000/api/v1/notes`);
    dispatch({
      type: CREATE_NOTE,
      payload: "",
    });
  } catch (error) {}
};
//! get the note
export const getNote = () => async (dispatch) => {
  try {
    const response = await axios.get(`http://localhost:5000/api/v1/notes`);
    dispatch({
      type: GET_NOTE,
      payload: response.data,
    });
  } catch (error) {}
};
//! delete Note
export const deleteNote = (id) => async (dispatch) => {
  console.log(id);
  try {
    const response = await axios.delete(
      `http://localhost:5000/api/v1/notes/${id}`
    );
    dispatch({
      type: DELETE_NOTE,
      payload: response.data,
    });
  } catch (error) {}
};
