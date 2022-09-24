import React from "react";
import { Routes, Route } from "react-router-dom";
import './sass/main.css';
import Education from "./Components/Education/Education";
import Experiences from './Components/Experiences/Experiences';
import NavBar from './Components/NavBar/NavBar';
import Home from "./Pages/Home/Home";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <>
      <NavBar />
      <div className="container">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<Experiences />} />
          <Route exact path="/education" element={<Education />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
