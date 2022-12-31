import { useState } from "react";
import NavBarP from "./components/NavBarP";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Contact from "./components/pages/Contact";
import About from "./components/pages/About";

import "./App.css";
import Home from "./components/pages/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<NavBarP sticky="top" />}>
            <Route index element={<Home/>}/>
            <Route path='About' element={<About />} />
            <Route path='Contact' element={<Contact />} />
            <Route path='*' element={<Navigate replace to='/' />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
