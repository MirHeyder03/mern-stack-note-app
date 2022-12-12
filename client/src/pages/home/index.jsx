import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Notes from "./Notes";

const index = () => {
  return (
    <>
      <Header />
      <div className="flex items-center justify-center h-20 text-5xl bg-gray-400">
        Hey User Welcome
      </div>
      <Notes />
      <Footer />
    </>
  );
};

export default index;
