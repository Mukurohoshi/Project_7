import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/erreur404.scss";

const Erreur404 = () => {
  return (
    <div>
      <main>
        <section className="erreur-container">
          <h1 className="erreur404"> 404 </h1>
          <h2 className="erreur-msg">
            Oups la page que vous demandez n'existe pas.
          </h2>
          <NavLink to="/" className="erreur-lien">
            Retourner sur la page d'accueil
          </NavLink>
        </section>
      </main>
    </div>
  );
};
export default Erreur404;
