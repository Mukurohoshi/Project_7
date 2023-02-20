import { useState } from "react";
import arrowDown from "../image/down.png";
import arrowUp from "../image/up.png";
import "../styles/collapse.scss";

function Collapse({ title, children, page }) {
  const [isOpen, setIsOpen] = useState(false);
  const button = () => {
    setIsOpen(!isOpen);
  };
  const banner =
    page === "about" ? "collapse-banner_about" : "collapse-banner_appart";
  const titleStyle =
    page === "about" ? "collapse-title_about" : "collapse-title_appart";
  const contentStyle =
    page === "about" ? "collapse-content_about" : "collapse-content_appart";

  return (
    <article>
      <div className={banner} onClick={button}>
        <h2 className={titleStyle}>{title}</h2>
        {isOpen ? (
          <img src={arrowUp} alt="closing arrow" className="collapse-arrow" />
        ) : (
          <img src={arrowDown} alt="opening arrow" className="collapse-arrow" />
        )}
      </div>
      {isOpen && <div className={contentStyle}>{children}</div>}
    </article>
  );
}

export default Collapse;
