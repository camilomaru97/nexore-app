import React from 'react'
import { Carousel } from 'react-bootstrap';

export const Muestras = () => {
    return (
        <div className='container_muestras'>
            <div className='logo_muestras'>
                <div className='logo'>
                    <img
                        src={'../assets/logo/logo-muestraspng-03.png'}
                    />
                </div>
            </div>

            <div className='container_muestras_slide'>
                <div className='container_slide'>
                     <Carousel fade >
                    
                        <Carousel.Item>
                            <img
                                className="d-block w-100 img"
                                src={'../assets/galeria/galeria-02.jpg'}
                                alt="Second slide"
                            />
                        </Carousel.Item>

                        <Carousel.Item>
                            <img
                                className="d-block w-100 img"
                                src={'../assets/galeria/galeria-03.jpg'}
                                alt="Third slide"
                            />
                        </Carousel.Item> 
                        <Carousel.Item>
                            <img
                                className="d-block w-100 img"
                                src={'../assets/galeria/galeria-04.jpg'}
                                alt="Third slide"
                            />
                        </Carousel.Item> 
                        <Carousel.Item>
                            <img
                                className="d-block w-100 img"
                                src={'../assets/galeria/galeria-05.jpg'}
                                alt="Third slide"
                            />
                        </Carousel.Item> 
                        <Carousel.Item>
                            <img
                                className="d-block w-100 img"
                                src={'../assets/galeria/galeria-06.jpg'}
                                alt="Third slide"
                            />
                        </Carousel.Item> 
                        <Carousel.Item>
                            <img
                                className="d-block w-100 img"
                                src={'../assets/galeria/galeria-07.jpg'}
                                alt="Third slide"
                            />
                        </Carousel.Item> 
                        <Carousel.Item>
                            <img
                                className="d-block w-100 img"
                                src={'../assets/galeria/galeria-08.jpg'}
                                alt="Third slide"
                            />
                        </Carousel.Item> 
                        <Carousel.Item>
                            <img
                                className="d-block w-100 img"
                                src={'../assets/galeria/galeria-09.jpg'}
                                alt="Third slide"
                            />
                        </Carousel.Item> 
                        <Carousel.Item>
                            <img
                                className="d-block w-100 img"
                                src={'../assets/galeria/galeria-10.jpg'}
                                alt="Third slide"
                            />
                        </Carousel.Item> 
                        <Carousel.Item>
                            <img
                                className="d-block w-100 img"
                                src={'../assets/galeria/galeria-11.jpg'}
                                alt="Third slide"
                            />
                        </Carousel.Item> 
                        <Carousel.Item>
                            <img
                                className="d-block w-100 img"
                                src={'../assets/galeria/galeria-12.jpg'}
                                alt="Third slide"
                            />
                        </Carousel.Item> 
                        <Carousel.Item>
                            <img
                                className="d-block w-100 img"
                                src={'../assets/galeria/galeria-13.jpg'}
                                alt="Third slide"
                            />
                        </Carousel.Item> 
                        <Carousel.Item>
                            <img
                                className="d-block w-100 img"
                                src={'../assets/galeria/galeria-14.jpg'}
                                alt="Third slide"
                            />
                        </Carousel.Item> 
                        <Carousel.Item>
                            <img
                                className="d-block w-100 img"
                                src={'../assets/galeria/galeria-15.jpg'}
                                alt="Third slide"
                            />
                        </Carousel.Item> 
                        
                    </Carousel> 
                </div>
            </div>
        </div>
    )
}
