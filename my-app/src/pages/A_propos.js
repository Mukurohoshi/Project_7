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
            <Collapse title="Fiabilité"  page="apropos"><p>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p></Collapse>
            <Collapse title="Respect"  page="apropos"><p>bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb</p></Collapse>
            <Collapse title="Service"  page="apropos"><p>cccccccccccccccccccccccccccccccccccccccc</p></Collapse>
            <Collapse title="Responsabilité" page="apropos"><p>dddddddddddddddddddddddddddddddddddddddddddddddddd</p></Collapse>
            </section>
        </main>
    </div>

        );
    };
export default A_propos;