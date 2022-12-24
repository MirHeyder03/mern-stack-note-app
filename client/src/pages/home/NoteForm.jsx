import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { createNote } from "../../redux/actions/noteAction";
const NoteForm = () => {
  const [note, setNote] = useState({ title: "", desc: "" });
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createNote(note));
    setNote({ title: "", desc: "" });
  };
  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };
  return (
    <div className="flex flex-col justify-center w-full gap-8 py-10 items-center">
      <h4 className="text-4xl font-bold text-center">Create a new note</h4>
      <form
        className="w-1/3 px-8 pt-6 pb-8 mb-4 bg-white rounded shadow-md"
        onSubmit={handleSubmit}
      >
        <div className="mb-4">
          <label
            className="block mb-2 text-sm font-bold text-gray-700"
            htmlFor="title"
          >
            Title
          </label>
          <input
            className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
            id="title"
            type="text"
            placeholder="Title"
            value={note.title}
            name={"title"}
            onChange={onChange}
          />
        </div>
        <div className="mb-6">
          <label
            className="block mb-2 text-sm font-bold text-gray-700"
            htmlFor="desc"
          >
            Description
          </label>
          <input
            className="w-full px-3 py-2 mb-3 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
            id="desc"
            type="text"
            placeholder="description"
            onChange={onChange}
            name="desc"
            value={note.desc}
          />
          <p className="text-xs italic text-red-500">{"s"}</p>
        </div>
        <div className="flex items-center justify-center text-center">
          <button
            className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline"
            type="submit"
          >
            save
          </button>
        </div>
      </form>
    </div>
  );
};

export default NoteForm;
