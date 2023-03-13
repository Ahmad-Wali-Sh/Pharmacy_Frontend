import React from "react";
import Home from "./Home/Home";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import NotificationContainer from "react-notifications/lib/NotificationContainer";

export default function App() {
  return (
    
    <div className="App">
          <NotificationContainer />
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home />}/>
      </Routes>
    </BrowserRouter>
    </div>
  );
}
