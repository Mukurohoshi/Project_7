import logoFooter from "../image/D_Footer desktop .png";
import logoFooterresponsive from "../image/D_Footer responsive .png";

export default function Footer() {
  return (
    <footer>
      <img src={logoFooter} className="image_full" alt="logo kasa" />
      <img
        src={logoFooterresponsive}
        className="image_mobile"
        alt="logo kasa mobile"
      />
    </footer>
  );
}
