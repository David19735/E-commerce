'use client'
import React, { useEffect, useState } from 'react'
import style from '@/styles/Header.module.css'
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import { useUsuario } from '@/contextos/userContext';


function Header() {

  const [mostrarCarrito,setMostrarCarrito]=useState(false);
  const [mostrarSesion,setMostrarSesion]=useState(false);
  const [csrfToken,setCsrfToken]=useState('');
  const router=useRouter();
  
  const {usuario,cargando}=useUsuario();
  

  useEffect(()=>{
    const getToken=async()=>{
      const res=await fetch('http://localhost:4000/auth/cerrar-sesion',{
        credentials:'include'
      })
      const data=await res.json();
      setCsrfToken(data.csrf)
    }
    getToken();
  },[])

 



  return (
    <header className={style.head} data-aos="flip-up">
        <div className={style.enlaces}>
            <Link href={'/'}>Inicio</Link>
            <Link href={'/videojuegos'}>Videojuegos</Link>
            <Link href={'/celulares'}>Celulares</Link>
            <Link href={'/consolas'}>Consolas</Link>
        </div>

        <div className={style.domicilio}>
            {
              usuario?
              <>
               <p>Entregar a {usuario?.municipio} { usuario?.cp}</p>
              <p><i className="bi bi-geo-alt-fill"></i>{usuario?.calle} {usuario.numero}</p>
              </>
              :
              <>
            <p>Entrega a domicilio</p>
            <p><i className="bi bi-geo-alt-fill"></i> Inicia sesión para entrega a domicilio</p>
              </>
              }
        </div>

        <div className={style.iconos}>
            <span className={style.i} 
              onClick={()=>{
                setMostrarSesion(!mostrarSesion)
                setMostrarCarrito(false)
              }}
            ><i className="bi bi-person-fill"></i></span>

            <span className={style.i}
              onClick={()=>{setMostrarCarrito(!mostrarCarrito)
                setMostrarSesion(false)
              }}
            ><i className="bi bi-cart-fill"></i></span>
            <p>
             {
              usuario?
              `Hola, ${usuario?.nombre}`
              :
              `Hola`
             }
             
            </p>
          
              <div className={`${style.carrito} ${mostrarCarrito? style.visible:''}`}>
                 
                    <div className={style.vacio}> 
                      <p>No tienes artículos en el carrito</p>
                      <p>--Aún no has iniciado sesión--</p>
                    </div>
                  
              </div>
              <div className={`${style.sesion} ${mostrarSesion? style.visible2:''}`}>
                    {
                      usuario ?
                     <>
                     <p>¿Seguro que deseas cerrar sesión?</p>
                     <button className={style.boton1}
                     onClick={async()=>{
                      const res=await fetch('http://localhost:4000/auth/cerrar-sesion',{
                        method:'POST',
                        headers:{
                          'Content-type':'application/json',
                          'X-CSRF-Token':csrfToken
                        },
                        body:JSON.stringify({}),
                        credentials:'include'
                      })
                      window.location.reload();
                     }} 
                     
                     >Cerrar sesión</button>
                     </>
                     :
                     <>
                     <p>Inicia sesión para comprar artículos</p>
                     <button className={style.boton2}
                      onClick={()=>{router.push('/login')}}
                     >Iniciar sesión</button>
                     </> 
                    }
              </div>
        </div>
    </header>
  )
}

export default Header