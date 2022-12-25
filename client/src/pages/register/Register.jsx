import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { register } from "../../redux/actions/userAction";

const Register = () => {
  const [user, setUser] = useState({ email: "", password: "" });
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const onChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleClick = () => {
    dispatch(register(user));
    navigate("/login");
  };

  return (
    <div
      id="staticModal"
      data-modal-backdrop="static"
      tabIndex="-1"
      aria-hidden="true"
      className={`flex top-0 justify-center  items-center z-50  w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 md:h-full `}
    >
      <div className="relative w-full h-full max-w-2xl md:h-auto">
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
          <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              Register
            </h3>
          </div>
          <div className="flex flex-col p-6 space-y-6">
            <input
              name="email"
              placeholder="Email"
              value={user.email}
              onChange={onChange}
              className="p-2 text-base leading-relaxed text-white bg-transparent border-2 rounded-lg placeholder:text-white"
            />
            <input
              name="password"
              placeholder="***********"
              value={user.password}
              onChange={onChange}
              className="p-2 text-base leading-relaxed text-white bg-transparent border-2 rounded-lg placeholder:text-white"
            />
          </div>
          <div className="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
            <button
              onClick={handleClick}
              data-modal-toggle="staticModal"
              type="submit"
              className="text-white w-full bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              register
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
