import React from "react";

import { Aplicaciones } from "./Aplicaciones";
import { EstiloComponent } from "./EstiloComponent";
import { HeaderComponent } from "./HeaderComponent";
import { Oferta } from "./Oferta";
import { SliderComponent } from "./SliderComponent";
import { Somos } from "./Somos";
import { Formulario } from "./Formulario";
import { Distribuidores } from "./Distribuidores";
import { Footer } from "./Footer";
import { Muestras } from "./Muestras";

export const NexoreApp = () => {

    return(
        <>
            <div className="container__uno">
                <HeaderComponent />
                <SliderComponent />
            </div> 

            <div className="container__dos">
                <EstiloComponent />
            </div>

            <div className="container__tres">
                <Oferta />
            </div>

            <div className="container__cuatro">
                <Somos />
            </div>

            <div className="container__cinco">
                <Aplicaciones />
            </div>

            <div className="container__seis">
                <Muestras />
            </div>

            <div className="container__siete">
                <Formulario />
            </div>

            <div className="container__ocho">
                <Distribuidores />
            </div>

            <div className="container__nueve">
                <Footer />
            </div>


            

            
        </>
    )
    
};
