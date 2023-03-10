import React from "react";
import Collapse from '../componente/Collapse';
import Banner from '../componente/Banner';
import imageApropos from "../image/IMG_apropos.png";
import list from "../data/apropos.json";
const A_propos = () => {
   
    return (
        <div>
        <main>
            <Banner imagebanner={imageApropos} title="" page="A_propos" />
            <section className="collapse-container_apropos">
            {list.map((item) =>
                    <Collapse key={item.title} title={item.title}> {item.description} </Collapse> 
                )}   
            </section>
        </main>
    </div>

        );
    };
export default A_propos;