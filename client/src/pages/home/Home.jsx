import React, { useEffect } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Notes from "./Notes";
import NoteForm from "./NoteForm";
import { useSelector, useDispatch } from "react-redux";

const Home = () => {
  const auth = useSelector((state) => state.user.user);
  const dispatch = useDispatch();
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("auth"));
    if (user) {
      dispatch({ type: "LOGIN", payload: user });
    }
    if (!user) {
      dispatch({ type: "LOGOUT" });
    }
  }, []);
  return (
    <>
      <Header />
      <div className="flex items-center justify-center h-20 text-5xl bg-gray-400">
        {auth
          ? `Welcome ${auth.email.split("@")[0].toUpperCase()}`
          : "Please register or login"}
      </div>
      <NoteForm />
      <Notes />
      <Footer />
    </>
  );
};

export default Home;
