import "./App.css";
import Header from "./components/header/Header";
import { Routes, Route } from "react-router-dom";
import Dummy from "./components/Dummy";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/home" element={<Dummy />} />
      </Routes>
    </div>
  );
}

export default App;
