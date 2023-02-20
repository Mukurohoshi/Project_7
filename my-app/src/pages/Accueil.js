import Banner from "../componente/Banner";
import Card from "../componente/Card";
import React from "react";

import imageAccueil from "../image/IMG.png";

import AppartListe from "../data/AppartListe.json";

const Accueil = () => {
  return (
    <div>
      <Banner imageURL={imageAccueil} text="Chez vous, partout et ailleurs" />
      {/* <Banner imageURL={imageAccueil} /> */}
      <section className="appart-list">
        {AppartListe.map(({ id, cover, title }) => (
          <Card key={id} id={id} cover={cover} title={title} />
        ))}
      </section>
    </div>
  );
};
export default Accueil;
