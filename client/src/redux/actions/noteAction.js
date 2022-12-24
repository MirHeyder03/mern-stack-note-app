import axios from "axios";
import {
  GET_ALL_NOTES,
  CREATE_NOTE,
  GET_NOTE,
  DELETE_NOTE,
  UPDATE_NOTE,
} from "./noteActionTypes";
//! get all notes
export const getAllNotes = () => async (dispatch) => {
  try {
    const response = await axios.get(`/api/v1/notes`);
    dispatch({
      type: GET_ALL_NOTES,
      payload: response.data,
    });
  } catch (error) {}
};
//! create a note
export const createNote = (note) => async (dispatch) => {
  try {
    const response = await axios.post(`/api/v1/notes`, note);
    dispatch({
      type: CREATE_NOTE,
      payload: response.data,
    });
  } catch (error) {
    console.log(error.response.data.error);
  }
};
//! get the note
export const getNote = (id) => async (dispatch) => {
  try {
    const response = await axios.get(`/api/v1/notes/${id}`);
    dispatch({
      type: GET_NOTE,
      payload: response.data,
    });
  } catch (error) {}
};
//! delete Note
export const deleteNote = (id) => async (dispatch) => {
  try {
    await axios.delete(`/api/v1/notes/${id}`);
    dispatch({
      type: DELETE_NOTE,
      payload: id,
    });
  } catch (error) {}
};
//! update Note
export const updateNote = (id, note) => async (dispatch) => {
  try {
    const response = await axios.patch(`/api/v1/notes/${id}`, note);
    dispatch({
      type: UPDATE_NOTE,
    });
  } catch (error) {}
};
