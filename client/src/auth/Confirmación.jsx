'use client'
import React, { useEffect, useState } from 'react'
import style from '@/styles/Confirmacion.module.css'

function Confirmación({token}) {

    const[csrfToken,setCsrfToken]=useState('');
    const[mensaje,setMensaje]=useState('');
    const[tipo,setTipo]=useState('');

    useEffect(()=>{
        const getToken=async()=>{
            const res=await fetch(`http://localhost:4000/auth/registro/${token}`,{
                credentials:'include'
            })
            const data=await res.json();

            setCsrfToken(data.csrf);
            setMensaje(data.mensaje);
            setTipo(data.tipo);
        }

        getToken();
    },[])

    

    

  return (
    <div className={style.container}>
            {
                tipo==='error'?
                <div className={style.mensaje}>
                    <h1>Error al confirmar cuenta</h1>
                    <p>{mensaje}</p>
                    <a href="/registro">Regístrate</a>
                </div>
                : 
                <div className={style.mensaje}>
                    <h1>Cuenta confirmada</h1>
                    <p>{mensaje}</p>
                    <a href="/login">Iniciar Sesión</a>
                </div>
            }
    </div>
  )
}

export default Confirmación