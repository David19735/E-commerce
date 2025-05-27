'use client'
import React, { useEffect, useState } from 'react'
import style from '@/styles/Password.module.css'
import Link from 'next/link'
import Alerta from '@/components/Alerta'
import { useRouter } from 'next/navigation'

function Password() {

  const router=useRouter();

  const[email,setEmail]=useState('');
  const[tipo,setTipo]=useState('');
  const[mensaje,setMensaje]=useState('');
  const[estadoAlerta,setEstadoAlerta]=useState(false);

  const[csrfToken,setCsrfToken]=useState('');

  useEffect(()=>{

    const getToken=async()=>{

      const res=await fetch('http://localhost:4000/auth/resetpassword',{
        credentials:'include'
      })
      const data=await res.json();
      setCsrfToken(data.csrf)
    }
    getToken();

  },[])


  const handleSubmit=async(e)=>{
    e.preventDefault();

    const res=await fetch('http://localhost:4000/auth/resetpassword',{
      method:'POST',
      headers:{
        'Content-Type':'application/json',
        'X-CSRF-Token':csrfToken
      },
      body:JSON.stringify({email}),
      credentials:'include'
    })

    const data=await res.json();
      setEstadoAlerta(true);
      setTipo(data.tipo);
      setMensaje(data.mensaje)

      if(data.tipo==="exito"){
          router.push('/mensajePassword')
      }
  }

  return (
    <div className={style.contenedor}>
        <form action="" className={style.formulario} data-aos="zoom-in" onSubmit={handleSubmit}>
            <h1>Reset Password</h1>
            <div className={style.contenedor_Input}>
                <input type="text" placeholder='Email'
                  value={email} onChange={(e)=>{setEmail(e.target.value)}}
                />
            </div>
            <div className={style.contenedor_Enlaces}>
                        <Link href={'/login'}>¿Ya tienes cuenta? Inicia Sesión</Link>
                        <Link href={'/registro'}>¿No tienes cuenta? Regístrate</Link>
                </div>
                <div className={style.contenedor_Btn}>
                        <button>Enviar</button>
                </div>
        </form>
        {
          estadoAlerta&&
          <Alerta
            tipo={tipo}
            mensaje={mensaje}
            estadoAlerta={estadoAlerta} setEstadoAlerta={setEstadoAlerta}
          />
        }
    </div>
  )
}

export default Password