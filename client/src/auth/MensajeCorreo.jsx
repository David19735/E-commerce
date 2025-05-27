import React from 'react'
import style from '@/styles/MensajeCorreo.module.css'

function MensajeCorreo() {
  return (
    <div className={style.container}>
        <div className={style.mensaje}>
                <h1>Cuenta creada</h1>
                <p>Hemos enviado un correo electrónico a tu bandeja de entrada para que puedas confirmar tu cuenta y así puedas tener acceso a seleccionar productos para el envío a domicilio y descuentos especiales.</p>
                <a href="/login">Regresar</a>
        </div>
    </div>
  )
}

export default MensajeCorreo