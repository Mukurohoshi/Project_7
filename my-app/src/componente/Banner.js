import React from "react";
import "../styles/banner.scss";

function Banner({ imagebanner, title, page }) {
  const banner =
      page === 'A_propos' ? 'banner-image-apropos' : 'banner-image-acceuil ';
  return (
    <section className="banner">
      <img src={imagebanner} alt="banner" className={banner} />
            <h1>{title}</h1>
    </section>
  );
}
export default Banner;
