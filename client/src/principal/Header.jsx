import React, { useState } from 'react'
import style from '@/styles/Header.module.css'
import Link from 'next/link'
import { useRouter } from 'next/navigation';

function Header({usuario}) {

  const [mostrarCarrito,setMostrarCarrito]=useState(false);
  const [mostrarSesion,setMostrarSesion]=useState(false);
  const router=useRouter();


  const usuarioActivo=usuario.usuario;
  console.log(usuarioActivo);

  return (
    <header className={style.head} data-aos="flip-up">
        <div className={style.enlaces}>
            <Link href={'/'}>Inicio</Link>
            <Link href={'/videojuegos'}>Videojuegos</Link>
            <Link href={'/celulares'}>Celulares</Link>
            <Link href={'/consolas'}>Consolas</Link>
        </div>

        <div className={style.domicilio}>
            <p>
              {
                usuarioActivo? `Entregar en: ${usuarioActivo.municipio} ${usuarioActivo.cp}`:'Entrega a domicilio'
              }
            </p>
            <p><i className="bi bi-geo-alt-fill"></i> {
              usuarioActivo? `${usuarioActivo.calle} ${usuarioActivo.numero}`:'Inicia sesión para entrega a domicilio'
            }</p>

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
              usuarioActivo? `Hola, ${usuarioActivo.nombre}`:'Inicia sesión'
             }
            </p>
          
              <div className={`${style.carrito} ${mostrarCarrito? style.visible:''}`}>
                  {
                    usuarioActivo?
                   <div>
                    <p>Aquí van los artículos</p>
                   </div> 

                    :
                    <div className={style.vacio}> 
                      <p>No tienes artículos en el carrito</p>
                      <p>--Aún no has iniciado sesión--</p>
                    </div>
                  }
              </div>
              <div className={`${style.sesion} ${mostrarSesion? style.visible2:''}`}>
                {
                  usuarioActivo?
                  
                  <>
                  <p>¿Seguro que quieres cerrar sesión?</p>
                  <button className={style.boton1}>Cerrar Sesión</button>
                  </>
                  :
                <>
                    <p>Inicia sesión para acceder a tus datos</p>
                    <button className={style.boton2}
                      onClick={()=>{router.push('/login')}}
                    >Iniciar Sesión</button>
                </>
                }
              </div>
        </div>
    </header>
  )
}

export default Header