import React from "react";
import { Routes, Route } from "react-router-dom";
import './sass/main.css';
import Education from "./Components/Education/Education";
import Experiences from './Components/Experiences/Experiences';
import NavBar from './Components/NavBar/NavBar';
import Home from "./Pages/Home/Home";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<Experiences />} />
        <Route exact path="/education" element={<Education />} />
      </Routes>
    </>
  );
}

export default App;
