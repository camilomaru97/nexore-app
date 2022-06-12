import React, { useEffect, useState } from 'react';
import validator from 'validator';
import Swal from 'sweetalert2'
import emailjs from 'emailjs-com'


export const Formulario = () => {

    const [value, setValue] = useState({
        nombre: '',
        correo: '',
        celular: '',
        producto: '',
    })

    const [check, setCheck] = useState(false)

    const [error, setError] = useState(null)

    useEffect(() => {
        setTimeout(() => {
            setError(null)
        }, 5000)
    }, [error])

    const handleChange = (e) => {
        setValue({
            ...value,
            [e.target.name]: e.target.value
        })
    }

    const { nombre, celular, correo, producto } = value;

    const handleSubmit = (e) => {
        e.preventDefault();

        if (formValid()) {

            console.log('email enviado...')
            emailjs.sendForm(
                'service_3y6poad',
                'template_xaqr1yi',
                e.target,
                'user_woN7BT4ZWsTkexb1NYvAK')
                .then(res => {
                    console.log(res)
                }).catch(err => {
                    console.log(err)
                })
        }


    }

    const handleCheck = (e) => {
        setCheck(true)
    }

    const formValid = () => {

        if (nombre.trim().length === 0) {
            setError('Nombre incorrecto')
            return false;
        } else if (!validator.isEmail(correo)) {
            setError('Correo incorrecto')
            return false;
        } else if (!validator.isNumeric(celular)) {
            setError('Celular incorrecto')
            return false;
        }
        else if (producto === '') {
            setError('Selecciona un producto')
            return false;
        } else if (check === false) {
            setError('Acepta los terminos y condiciones')
            return false;
        }

        Swal.fire({
            title: '¡Formulario enviado con exito!',
            text: 'Bienvenido a Nexore, pronto nos comunicaremos contigo',
            icon: 'success',
            confirmButtonText: 'OK'
        })

        setValue({
            nombre: '',
            correo: '',
            celular: '',
            producto: ''
        })

        return true;

    }

    return (


        <div className='container__main'>

        

            <div className='container__all'>

            <h5>Contáctanos</h5>

                <div className='container__form'>


                    <div className='logo__wrap'>
                        <img
                            src={'./assets/form/background-form-02-02.jpg'}
                            alt='logotipo'
                        />
                        

                    </div>
                    <form
                        onSubmit={handleSubmit}
                    >
                        {
                            error && (
                                <div className='error'>
                                    <p>{error}</p>
                                </div>
                            )
                        }

                        <input
                            name='nombre'
                            value={nombre}
                            onChange={handleChange}
                            autoComplete='off'
                            placeholder='Nombre'
                        />

                        <input
                            name='correo'
                            value={correo}
                            onChange={handleChange}
                            autoComplete='off'
                            placeholder='Correo'
                        />


                        <input
                            name='celular'
                            value={celular}
                            onChange={handleChange}
                            autoComplete='off'
                            placeholder='Celular'
                        />

                        <select
                            name="producto"
                            id="producto"
                            onChange={handleChange}
                        >
                            <option>Seleccione un producto</option>
                            <option value={'BELLATERRA'}>Bellaterra</option>
                            <option value={'VELOVA'}>Velova</option>
                            <option value={'BELLATERRA CEMENTO'}>Bellaterra Cemento</option>
                            <option value={'DELICATO'}>Delicato</option>
                            <option value={'METALEX'}>Metalex</option>
                        </select>

                        <div className='wrap'>
                            <input
                                name='check'
                                onChange={handleCheck}
                                type='checkbox'
                            />
                            <p>He leido y acepto <a href={'assets/pdf/politica_privacidad.pdf'} rel='noreferrer' target='_blank'>la politica y privacidad</a></p>
                        </div>

                        

                        <button
                            className="submit"
                            type="submit"
                        >
                            Enviar
                        </button>


                    </form>
                </div>
            </div>


        </div>
    )
}


