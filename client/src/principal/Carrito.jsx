import React from 'react'
import { useCar } from '@/contextos/productosContext'
import style from '@/styles/Carrito.module.css'

function Carrito() {

  const {car,deleteToCar}=useCar();


  return (
    <div>
      {
        car.length<1 ?
        <p>Carrito sin productos</p>
        :
        <div className={style.carrito}>
            {
              car.map((prod,index)=>{   
                return (
                 <div className={style.contenedor} key={index}>
                    <div className={style.imagen}>
                        <img src={`${prod.imagen}`} alt="" />
                    </div>
                    <div className={style.contenido}>
                        <p>{prod.nombre}</p>
                        <p>${prod.precio}</p>
                       <p>Cantidad: {prod.cantidad}</p>
                      
                    </div>
                    <div className={style.botones}>
                        <button
                         onClick={()=>{deleteToCar(prod)}}
                        >Eliminar</button>
                    </div>
                 </div> 
                )
              })
            }
        </div>
      }
    </div>
  )
}

export default Carrito