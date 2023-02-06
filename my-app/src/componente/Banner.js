import React from "react";
import "../styles/banner.scss";
import imageAccueil from '../image/IMG.png';



function Banner(){
  return (
    <section className="banner_accueil">
        <img src={imageAccueil} alt="logements"/>
          <p>Chez vous, partout et ailleurs</p>
    </section>
  );
}
export default Banner;