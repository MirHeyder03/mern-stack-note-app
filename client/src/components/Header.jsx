import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="flex items-center justify-around h-20 text-white bg-indigo-700">
      <Link to={"/"} className="text-3xl text-white">
        Note App
      </Link>
      <div className="flex gap-6">
        <Link
          to={"login"}
          className="text-xl shadow cursor-pointer hover:opacity-50"
        >
          Log In
        </Link>
        <Link
          to={"sigup"}
          className="text-xl shadow cursor-pointer hover:opacity-50"
        >
          Sign Up
        </Link>
        <Link
          to={"logout"}
          className="text-xl shadow cursor-pointer hover:opacity-50"
        >
          Log Out
        </Link>
      </div>
    </header>
  );
};

export default Header;
