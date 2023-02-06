import AppartListe from "../data/AppartListe.json";
import Banner from '../componente/Banner';
export default function Accueil() {
  //
  console.log(AppartListe);

  return (
    <div>
      <Banner/>
      {/* HTML + un boucle avec composant CardImmo */}
    </div>
  );
}
