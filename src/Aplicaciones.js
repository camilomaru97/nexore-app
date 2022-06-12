import React from 'react'

export const Aplicaciones = () => {
    return (
        <>
            <div className='container__aplicaciones'>

            <div className='box__dos'>
                    <img
                        src= {'./assets/aplicacion/logo-aplicacion-07.png'}
                        alt="aplicacion logo"
                    />
                    <p>
                        Presentación <br/>
                        Nexore
                    </p>
                    <div>
                    <a target="_blank" href={'../assets/pdf/Presentacion.pdf'}>Ver más</a> 
                    </div>
                    
                </div>
                <div className='box__uno'>
                    <img
                        src= {'./assets/aplicacion/logo-aplicacion-08.png'}
                        alt="aplicacion logo"
                    />
                    <p>
                        Aplicación <br/>
                        (Guia Rapida)
                    </p>
                    <div className='aplicacion'>
                        <a target="_blank" href={'../assets/pdf/guia_rapida.pdf'}>Ver más</a> 
                    </div>
                </div>
                
            

            </div>
        </>
  )
}
