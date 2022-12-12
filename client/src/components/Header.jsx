import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="flex items-center justify-around h-20 text-white bg-indigo-700">
      <h2 className="text-3xl text-white">Note App</h2>
      <div className="flex gap-6">
        <Link className="text-xl shadow cursor-pointer hover:opacity-50">Log In</Link>
        <Link className="text-xl shadow cursor-pointer hover:opacity-50">Sign Up</Link>
        <Link className="text-xl shadow cursor-pointer hover:opacity-50">Log Out</Link>
      </div>
    </header>
  );
};

export default Header;
