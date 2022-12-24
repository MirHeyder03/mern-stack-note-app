import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getNote, updateNote } from "../../redux/actions/noteAction";
const NoteDetail = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const noteDetails = useSelector((state) => state?.notes?.note);
  const [note, setNote] = useState({
    title: "",
    desc: "",
  });
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(getNote(id));
  }, []);
  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };
  const handelClick = () => {
    dispatch(updateNote(id, note));
    navigate("/");
  };
  console.log(note);
  return (
    <div
      id="staticModal"
      data-modal-backdrop="static"
      tabIndex="-1"
      aria-hidden="true"
      className={`fixed flex top-0 justify-center  items-center z-50  w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full `}
    >
      <div className="relative w-full h-full max-w-2xl md:h-auto">
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
          <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              Update Note
            </h3>
            <button
              onClick={() => navigate("/")}
              type="button"
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
              data-modal-toggle="staticModal"
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <div className="flex flex-col p-6 space-y-6">
            <input
              onChange={onChange}
              name="title"
              value={note.title}
              className="p-1 text-base leading-relaxed text-white bg-transparent border-2 rounded-lg"
            />
            <input
              name="desc"
              value={note.desc}
              onChange={onChange}
              className="p-1 text-base leading-relaxed text-white bg-transparent border-2 rounded-lg"
            />
          </div>
          <div className="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
            <button
              onClick={handelClick}
              data-modal-toggle="staticModal"
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              save
            </button>
            <button
              onClick={() => navigate("/")}
              data-modal-toggle="staticModal"
              type="button"
              className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
            >
              cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoteDetail;
