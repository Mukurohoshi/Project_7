import { NavLink } from "react-router-dom";
import "../styles/card.scss";

function Card({ id, title, cover }) {
  return (
    <NavLink to={`/Appartement/${id}`} key={id}>
      <article key={id} className="appart-card">
        
        <img src={cover} alt={`${title} cover`} className="card-img"></img>
        <div className="card-background"></div>
        <h2 className="card-title">{title}</h2>
      </article>
    </NavLink>
  );
}

export default Card;
