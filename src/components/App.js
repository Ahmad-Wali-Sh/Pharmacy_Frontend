import React from "react";
import Home from "./Home/Home";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

export default function App() {
  return (
    
    <div className="App">
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home />}/>
      </Routes>
    </BrowserRouter>
    </div>
  );
}
