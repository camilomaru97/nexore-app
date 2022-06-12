import React from 'react'

export const Somos = () => {
  return (
    <>
        <div className='container__somos'>
            <h5>somos un nuevo origen</h5>

            <div className='container__box'>
                <div className='box'>
                    <div className='container__descripcion'>
                        <div className='numero'>
                            <h2>1.</h2>
                        </div>
                        <div className='descripcion'>
                            <p>Tenemos para ti muros únicos <br/> 
                                y totalmente personalizados.</p>
                        </div>
                    </div>
                    <div className='container__descripcion'>
                        <div className='numero'>
                            <h2>2.</h2>
                        </div>
                        <div className='descripcion'>
                            <p>La calidad de nuestros productos es <br/> 
                                 un reflejo de años de experiencia.</p>
                        </div>
                    </div>
                    <div className='container__descripcion'>
                        <div className='numero'>
                            <h2>3.</h2>
                        </div>
                        <div className='descripcion'>
                            <p> Con nuestros acabados puedes estar <br/> 
                                tranquilo, son super resistentes y de <br/> 
                                facil mantenimiento.</p>
                        </div>
                    </div>
                    <div className='container__descripcion'>
                        <div className='numero'>
                            <h2>4.</h2>
                        </div>
                        <div className='descripcion'>
                            <p>Nos gusta realizar asesoria <br/>  
                                personalizada para que tus sueños <br/> 
                                se hagan realidad.</p>
                        </div>
                    </div> 
                </div>
                <div className='img'>
                    <img
                        src= {'../assets/somos/nuevo_origen.jpg'}
                        alt="Estilo Dos"
                    />
                </div>
            </div>
        </div>
    </>
  )
}
