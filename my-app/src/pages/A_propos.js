import React from "react";
import Collapse from '../componente/Collapse';
import Banner from '../componente/Banner';
import imageApropos from "../image/IMG_apropos.png";
const A_propos = () => {
   
    return (
        <div>
        <main>
            <Banner imagebanner={imageApropos} title="" page="A_propos" />
            <section className="collapse-container_apropos">
            <Collapse title="Fiabilité"  page="apropos"><p>Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, 
            et toutes les informations sont régulièrement vérifiées  par nos équipes.</p>
            </Collapse>
            <Collapse title="Respect"  page="apropos"><p>La bienveillance fait partie des valeurs fondatrices de Kasa. 
            Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</p>
            </Collapse>
            <Collapse title="Service"  page="apropos"><p>Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. 
                N'hésitez pas à nous contacter si vous avez la moindre question.</p>
            </Collapse>
            <Collapse title="Responsabilité" page="apropos"><p>La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, 
            chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, 
            cela permet à nos équipes de vérifier que les standards sont bien respectés. 
            Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.</p>
            </Collapse>
            </section>
        </main>
    </div>

        );
    };
export default A_propos;