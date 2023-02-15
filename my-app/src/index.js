import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Accueil from "./pages/Accueil";
import Appartement from "./pages/Appartement";
import Apropos from "./pages/A_propos";
import Erreur404 from "./pages/Erreur404";
import Header from "./componente/Header";
import Footer from "./componente/Footer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/Appartement/:id" element={<Appartement />} />
        <Route path="/A_propos" element={<Apropos />} />
        <Route path="*" element={<Erreur404 />} />
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  </React.StrictMode>
);
