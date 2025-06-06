import React from 'react'
import style from '@/styles/Videojuegos.module.css'
import Header from './Header';


function Videojuegos(datos) {

  const juegos=datos.datos;
  console.log(juegos);

  return (
    <div className={style.container}>
           <Header/>
            {
                juegos.map((juego,index)=>{
                   return <div className={style.contenedor}>
                        <div className={style.imagen}>

                        </div>
                        <div className={style.contenido}>
                                <h3>{juego.nombre}</h3>
                                <h4>{juego.descripcion}</h4>
                                <p>${juego.precio}</p>
                                <button>Agregar al carrito</button>
                        </div>
                   </div> 
                })
            }
    </div>
  )
}

export default Videojuegos