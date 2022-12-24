import React, { useEffect } from "react";
import { RiDeleteBin7Fill } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import moment from "moment";
import { getAllNotes, deleteNote } from "../../redux/actions/noteAction";
const Notes = () => {
  const dispatch = useDispatch();
  const { notes } = useSelector((state) => state.notes);
  useEffect(() => {
    dispatch(getAllNotes());
  }, []);
  return (
    <div className="grid w-full grid-cols-3 gap-4 py-10 justify-items-center">
      {notes &&
        notes.map((note) => (
          <div
            key={note?._id}
            className="relative max-w-sm p-6 pr-16 bg-gray-800 border border-gray-700 rounded-lg shadow-md"
          >
            <button
              className="absolute text-2xl text-white right-2 top-8"
              onClick={() => dispatch(deleteNote(note._id))}
            >
              <RiDeleteBin7Fill />
            </button>
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {(note?.title).substring(0, 20)}
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {(note?.title).substring(0, 40)}
            </p>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {moment(note?.createdAt).add(10, "days").calendar()}
            </p>
            <Link to={`/${note?._id}`}>
              <button className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Update
              </button>
            </Link>
          </div>
        ))}
    </div>
  );
};

export default Notes;
