import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getAllNotes } from "../redux/actions/noteAction";
import { logout } from "../redux/actions/userAction";

const Header = () => {
  const auth = useSelector((state) => state.user.user);
  const dispatch = useDispatch();
  return (
    <header className="flex items-center justify-around h-20 text-white bg-indigo-700">
      <Link to={"/"} className="text-3xl text-white">
        Note App
      </Link>
      <div className="flex gap-6">
        {auth ? (
          <>
            <Link
              to={"/"}
              onClick={() => dispatch(logout())}
              className="text-xl shadow cursor-pointer hover:opacity-50"
            >
              Log Out
            </Link>
          </>
        ) : (
          <>
            <Link
              to={"/login"}
              className="text-xl shadow cursor-pointer hover:opacity-50"
            >
              Log In
            </Link>
            <Link
              to={"/register"}
              className="text-xl shadow cursor-pointer hover:opacity-50"
            >
              Register
            </Link>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
