import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Notes from "./Notes";
import NoteForm from "./NoteForm";
import NoteDetail from "./NoteDetail";
import { useSelector } from "react-redux";

const Home = () => {
  return (
    <>
      <Header />
      <div className="flex items-center justify-center h-20 text-5xl bg-gray-400">
        Hey User Welcome
      </div>
      <NoteForm />
      <Notes />
      <Footer />
    </>
  );
};

export default Home;
