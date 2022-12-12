import mongoose from "mongoose";
import Note from "../models/notes.js";
//!create a new note
const createNote = async (req, res) => {
  const { title, desc } = req.body;
  try {
    const note = await Note.create({ title, desc });
    res.status(200).json(note);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
//! get all notes
const getAllNotes = async (req, res) => {
  const notes = await Note.find({}).sort({ createdAt: -1 });
  res.status(200).json(notes);
};
//get  the note
const getNote = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "ID is not a valid" });
  }
  const note = await Note.findById(id);
  if (!note) {
    return res.status(404).json({ error: "Note not found!" });
  }
  res.status(200).json(note);
};
//!update the note
const updateNote = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "ID is not a valid" });
  }
  const note = await Note.findOneAndUpdate(
    { _id: id },
    {
      ...req.body,
    },
    { new: true }
  );
  if (!note) {
    return res.status(404).json({ error: "Note not found!" });
  }
  res.status(200).json(note);
};

//!delete the note
const deleteNote = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "ID is not a valid" });
  }
  const note = await Note.findOneAndDelete({ _id: id });
  if (!note) {
    return res.status(404).json({ error: "Note not found!" });
  }
  res.status(200).json(note);
};
export { createNote, getAllNotes, getNote, updateNote, deleteNote };
