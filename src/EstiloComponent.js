import React from "react";

export const EstiloComponent = () => {
    return (
        <>
            <div className="titulo__estilos">
                <h2>¿Cual es tu estilo?</h2>
                <p> Nexore es una marca que va mas allá, buscamos que junto a nuestros clientes <br/> creemos  proyectos que expresen emociones por medio de acabados exclusivos. </p>
            </div>

            <div className="boxes">
                <div className="container__boxes">
                    <div className="box">
                            <img
                                src= {'../assets/estilos/Bellatera.jpg'}
                                alt="Estilo Uno"
                            />
                            <div className="hover">
                                <h2> <a target="_blank" href={'../assets/pdf/FT_BELLATERRA.pdf'}>Ver más</a> </h2>
                            </div>      
                    </div>
                    <div>
                        <h1>BELLATERRA <br/> </h1>
                    </div> 
                </div>

                <div className="container__boxes">
                    <div className="box">
                            <img
                                src= {'../assets/estilos/Velova.jpg'}
                                alt="Estilo Dos"
                            />
                            <div className="hover">
                                <h2> <a target="_blank" href={'../assets/pdf/FT_VELOVA.pdf'}>Ver más</a> </h2>
                            </div>
                    </div>
                    <h1>VELOVA <br/> (COMPL. TEXTURA) </h1>
                </div>

                <div className="container__boxes">
                    <div className="box">
                            <img
                                src= {'../assets/estilos/Bellaterra_cemento.jpg'}
                                alt="Estilo Tres"
                            />
                            <div className="hover">
                            <h2> <a target="_blank" href={'../assets/pdf/FT_BELLATERRA_B.CEMENTO.pdf'}>Ver más</a> </h2>
                            </div>
                    </div>
                    <div>
                        <h1>BELLATERRA <br/> B. CEMENTO</h1>
                    </div>
                </div>

                <div className="container__boxes">
                    <div className="box">
                            <img
                                src= {'../assets/estilos/delicato.jpg'}
                                alt="Estilo Cuatro"
                            />
                            <div className="hover">
                            <h2> <a target="_blank" href={'../assets/pdf/FT_DELICATO.pdf'}>Ver más</a> </h2>
                            </div>
                    </div>
                    <h1>DELICATO <br/> </h1>
                </div>

                <div className="container__boxes">
                    <div className="box">
                            <img
                                src= {'../assets/estilos/Metalex.jpg'}
                                alt="Estilo Cuatro"
                            />
                            <div className="hover">
                            <h2> <a target="_blank" href={'../assets/pdf/FT_METALEX.pdf'}>Ver más</a> </h2>
                            </div>
                    </div>
                        <h1> METALEX <br/> </h1>
                </div>
            </div>
            
        </>
    )
};

