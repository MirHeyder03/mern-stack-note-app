import React from "react";

const index = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full">
      <h2>Login</h2>
      <form action="" className="flex flex-col">
        <input type="email" placeholder="email" name="email" />
        <input type="password" placeholder="password" name="password" />
        <button type="submit">login</button>
      </form>
    </div>
  );
};

export default index;
