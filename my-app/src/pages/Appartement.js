import React from "react";
import { useParams } from 'react-router-dom';
import AppartListe from "../data/AppartListe.json";
import Erreur404 from "./Erreur404";
import Slider from '../componente/Slider';
import Tag from '../componente/Tag';
import Star from '../componente/Star';
import Collapse from '../componente/Collapse';
import '../styles/appartement.scss';

const Appartement = () => {
const { id } = useParams();
const Appartementchoisi = AppartListe.find((appart) => appart.id === id);

if (!Appartementchoisi) return <Erreur404 />;

return (
  <div className="appartement-container">
    <Slider slides={Appartementchoisi.pictures} />
    <section className="appartement-infos">
      <div className="appartement-title">
          <h1>{Appartementchoisi.title} </h1>
          <p>{Appartementchoisi.location}</p>
          <Tag tags={Appartementchoisi.tags} />
      </div>
      <div className="appartement-host">
          <div className="appartement-profile">
              <p className="host-name">{Appartementchoisi.host.name}</p>
              <img
                  src={Appartementchoisi.host.picture}
                  alt="host profile"
              />
          </div>
          <Star stars={Appartementchoisi.rating} className="host-rate" />
      </div>
    </section>
    <section className="infos-container">
      <Collapse
          title="Description"
          content={Appartementchoisi.description}
      />
      <Collapse
          title="Équipement"
          content={
              <ul className="equipment-list">
                  {Appartementchoisi.equipments.map((equipment) => {
                      return <li key={equipment}>{equipment}</li>;
                  })}
              </ul>
          }
      />
    </section>
  </div>
);
}

export default Appartement;
