import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';

export const SliderComponent = () => {

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    }

    return(
        <Carousel fade activeIndex = {index} onSelect = {handleSelect}>
            <Carousel.Item className='carousel-item1' >
                
            <Carousel.Caption>
                <h2><span> Diseñamos </span>  <br/> tus espacios</h2>
                <p>Nexore, la única empresa que trae a la realidad 
                tus proyectos. Tu imaginación no tiene limites 
                con nuestras texturas.
                </p>

                <div className='btn'>
                    <div>
                        <a target="_blank" href="https://api.whatsapp.com/message/QWPGHL6ANV7MD1?autoload=1&app_absent=0">Cotizar</a>
                    </div>
                    <div>
                        <a target="_blank" href="https://api.whatsapp.com/message/QWPGHL6ANV7MD1?autoload=1&app_absent=0">Más info</a>
                    </div>
                </div>
                
            </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item className='carousel-item2'>

            <Carousel.Caption className='text-left'>
            
            <h2><span> Diseñamos </span>  <br/> tus espacios</h2>
                <p>Nexore, la única empresa que trae a la realidad 
                tus proyectos. Tu imaginación no tiene limites 
                con nuestras texturas.
                </p>

                <div className='btn'>
                    <div>
                        <a target="_blank" href="https://api.whatsapp.com/message/QWPGHL6ANV7MD1?autoload=1&app_absent=0">Cotizar</a>
                    </div>
                    <div>
                        <a target="_blank" href="https://api.whatsapp.com/message/QWPGHL6ANV7MD1?autoload=1&app_absent=0">Más info</a>
                    </div>
                </div>

            </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item className='carousel-item3'>
            
                <Carousel.Caption>
                    <h2><span> Diseñamos </span>  <br/> tus espacios</h2>
                <p>Nexore, la única empresa que trae a la realidad 
                tus proyectos. Tu imaginación no tiene limites 
                con nuestras texturas.
                </p>
                    <div className='btn'>
                    <div>
                        <a target="_blank" href="https://api.whatsapp.com/message/QWPGHL6ANV7MD1?autoload=1&app_absent=0">Cotizar</a>
                    </div>
                    <div>
                        <a target="_blank" href="https://api.whatsapp.com/message/QWPGHL6ANV7MD1?autoload=1&app_absent=0">Más info</a>
                    </div>
                </div>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
    
}


