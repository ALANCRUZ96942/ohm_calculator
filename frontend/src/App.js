import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home.jsx";
import Resistence from "./components/Resistence.jsx";
import React from 'react';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calculate" element={<Resistence />} />
      </Routes>
    </BrowserRouter>
  </div>
  );
}

export default App;
