import React from "react";
import "../styles/banner.scss";

function Banner({ imageURL, text }) {
  return (
    <section className="banner_accueil">
      <img src={imageURL} alt="logements" />
      {text && <p>{text}</p>}
    </section>
  );
}
export default Banner;
