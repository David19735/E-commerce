import React from 'react'
import style from '@/styles/MensajePassword.module.css'

function MensajePassword() {
  return (
    <div className={style.container}>
        <div className={style.mensaje}>
                <h1>Cuenta creada</h1>
                <p>Hemos enviado un correo electrónico a tu bandeja de entrada para que puedas realizar el cambio de contraseña de tu cuenta.</p>
                <a href="/">Regresar</a>
        </div>
    </div>
  )
}

export default MensajePassword