import React, { useEffect } from "react";
import { RiDeleteBin7Fill } from "react-icons/ri";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getAllNotes, deleteNote } from "../../redux/actions/noteAction";
const Notes = (props) => {
  useEffect(() => {
    props.getAllNotes();
  }, [props.notes]);
  return (
    <div className="grid w-full grid-cols-3 gap-4 py-10 justify-items-center">
      {props.notes.notes.map((note) => (
        <div
          key={note._id}
          className="relative max-w-sm p-6 pr-16 bg-gray-800 border border-gray-700 rounded-lg shadow-md"
        >
          <button
            className="absolute text-2xl text-white right-2 top-8"
            onClick={() => props.dispatch(deleteNote(note._id)())}
          >
            <RiDeleteBin7Fill />
          </button>
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {note.title}
            </h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {note.desc}
          </p>
          <a
            href="#"
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Read more
          </a>
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = (state, dispatch) => ({
  notes: state.notes,
  actions: {
    handleDelete: bindActionCreators(deleteNote, dispatch),
  },
});
export default connect(mapStateToProps, { getAllNotes, deleteNote })(Notes);
