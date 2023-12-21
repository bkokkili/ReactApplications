import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Menu from "./components/Menu";
import Header from "./components/Header";
import "./App.css"

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div>
      <p>Welcome to Company Portal</p>
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path="/home" element={<Home />}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact />}/>
          <Route path="/menu" element={<Menu />}/>
        </Routes>
      </BrowserRouter>
      
    </div>
  </React.StrictMode>
);
