import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.scss";
import Home from "./components/pages/home/Home";
import Students from "./components/pages/home/students/Students";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/students" element={<Students />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
