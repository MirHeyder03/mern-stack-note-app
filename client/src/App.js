import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home.jsx";
import NoteDetail from "./pages/home/NoteDetail.jsx";
import Login from "./pages/login";
const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<NoteDetail />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
};

export default App;
