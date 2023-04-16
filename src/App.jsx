import React from "react";
import "./App.css"


import Footer from "./componentes/Footer/Footer";
import Nav from "./componentes/Nav/Nav";

import Header from "./componentes/Header/Header";

import Curriculum from "./componentes/Curriculum/Curriculum";
import Portfolio from "./componentes/Portfolio/Portfolio";
import Contact from "./componentes/Contact/Contact";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";


function App() {

  return(
    <>

      <Header></Header>

      <BrowserRouter>

      <Nav></Nav> 
  
      <Routes>
        <Route index element={<Curriculum/>} />
        <Route path="portifolio" element={<Portfolio />} />
        <Route path="contato" element={<Contact />} />
      </Routes>

      </BrowserRouter>

      <Footer></Footer>


    </>
  )
}

export default App;
