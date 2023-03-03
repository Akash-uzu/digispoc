import React from "react";
import Login from "./components/Login";
import Home from "./components/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Routes>
       <Route path = "/" element={<Login />} ></Route>
       <Route path = "/home" element={<Home />} ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
