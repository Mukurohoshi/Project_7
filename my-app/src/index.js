import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Accueil from "./pages/Accueil";
import Header from "./componente/Header";
import Footer from "./componente/Footer";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Header></Header>
      <Routes>
        <Route path="/" element={<Accueil />} />
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
    
  </React.StrictMode>
);

