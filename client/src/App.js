import "./App.css";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import Add from "./pages/Add";
import Home from "./pages/Home";
function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<Add />} />
      </Routes>
    </div>
  );
}

export default App;
