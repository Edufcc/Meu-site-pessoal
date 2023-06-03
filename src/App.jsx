import React from "react";

import api from "./api"

import "./App.css"


import Nav from "./componentes/Nav/Nav";
import Header from "./componentes/Header/Header";
import Footer from "./componentes/Footer/Footer";


import Curriculum from "./componentes/Curriculum/Curriculum";
import Portfolio from "./componentes/Portfolio/Portfolio";
import Contact from "./componentes/Contact/Contact";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  const [informacoes, setInformacoes] = React.useState({});
  const [curriculo, setCurriculo] = React.useState({});
  const [portfolio, setPotfolio] = React.useState([]);

  const fetchDados = async () => {
    try {
      const informacao = await api.get('/informacoes/1');
      setInformacoes({
        foto: informacao.data.foto,
        nome: informacao.data.nome,
        cargo: informacao.data.cargo
      });

      const experiencia = await api.get('/experiencia');
      const habilidade = await api.get('/experiencia');
      setCurriculo({
        resumo: informacao.data.resumo,
        experiencia: experiencia.data,
        habilidade: habilidade.data
      });

     

      const portfolio = await api.get('/portfolio');
      setPotfolio(portfolio.data);

    } catch (error) {
      console.error('Erro ao buscar dados', error)
    }
  };

  React.useEffect(() => {
    fetchDados();
  }, []);

  return(
    <>

      <Header informacoes={informacoes}></Header>

      <BrowserRouter>
      <Nav></Nav> 
      <Routes>
        <Route index element={<Curriculum curriculo={curriculo}/>} />
        <Route path="portifolio" element={<Portfolio portfolio={portfolio} />} />
        <Route path="contato" element={<Contact />} />
      </Routes>
      </BrowserRouter>

      <Footer></Footer>


    </>
  )
}

export default App;
