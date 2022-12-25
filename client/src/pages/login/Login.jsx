import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../../redux/actions/userAction";

const Login = () => {
  const [user, setUser] = useState({ email: "", password: "" });
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const onChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const auth = useSelector((state) => state.user.user);
  const handleClick = () => {
    localStorage.setItem("auth", JSON.stringify(auth));
    dispatch(login(user));
    if (auth === null) {
      return;
    }
    navigate("/");
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
              Login
            </h3>
          </div>
          <div className="flex flex-col p-6 space-y-6">
            <input
              type="email"
              name="email"
              value={user.email}
              onChange={onChange}
              placeholder="Email"
              className="p-1 text-base leading-relaxed text-white bg-transparent border-2 rounded-lg placeholder:text-white"
            />
            <input
              // type="password"
              name="password"
              value={user.password}
              onChange={onChange}
              placeholder="*************"
              className="p-1 text-base leading-relaxed text-white bg-transparent border-2 rounded-lg placeholder:text-white"
            />
          </div>
          <div className="flex items-center justify-center w-full p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
            <button
              onClick={handleClick}
              data-modal-toggle="staticModal"
              type="submit"
              className="text-white w-full bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
