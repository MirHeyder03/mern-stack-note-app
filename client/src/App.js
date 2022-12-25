import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home.jsx";
import NoteDetail from "./pages/home/NoteDetail.jsx";
import Login from "./pages/login";
import Register from "./pages/register";
const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route  path="/" element={<Home />} />
        <Route exact path="/:id" element={<NoteDetail />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
      </Routes>
    </div>
  );
};

export default App;
