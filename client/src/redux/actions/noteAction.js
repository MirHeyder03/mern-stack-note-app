import axios from "axios";
import {
  GET_ALL_NOTES,
  CREATE_NOTE,
  GET_NOTE,
  DELETE_NOTE,
} from "./noteActionTypes";

export const getAllNotes = () => async (dispatch) => {
  try {
    const response = await axios.get(`http://localhost:5000/api/v1/notes`);
    dispatch({
      type: GET_ALL_NOTES,
      payload: response.data,
    });
  } catch (error) {}
};

export const createNote = () => ({});
export const getNote = () => ({});
export const deleteNote = () => ({});
export const updateNote = () => ({});
