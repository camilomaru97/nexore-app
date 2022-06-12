import React from 'react'


export const Footer = () => {
    return (
        <>
            <div className="redes-sociales">
                <a target="_blank" className='logo__red' href='https://www.instagram.com/nexore.co/'>
                    <img 
                        src={'./assets/footer/redes-03.png'}
                        alt='logotipo'
                    />
                </a>
                <a target="_blank" className='logo__red' href='https://www.facebook.com/Nexore-104032881456341'>
                    <img 
                        src={'./assets/footer/redes-04.png'}
                        alt='logotipo'
                    />
                </a>
                <a target="_blank" className='logo__red' href='https://api.whatsapp.com/message/QWPGHL6ANV7MD1?autoload=1&app_absent=0'>
                    <img 
                        src={'./assets/footer/redes-05.png'}
                        alt='logotipo'
                    />
                </a>
            </div>
        </>
    )
}