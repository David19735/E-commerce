import React,{useRef, useState} from 'react'
import style from '@/styles/CarruselProductos.module.css'

function CarruselProductos({titulo,producto=[]}) {

    const [productoCarrito,setProductoCarrito]=useState()

    
     const contenedorRef = useRef(null);
    
      const scrollIzquierda = () => {
        contenedorRef.current.scrollBy({ left: -300, behavior: 'smooth' });
      };
    
      const scrollDerecha = () => {
        contenedorRef.current.scrollBy({ left: 300, behavior: 'smooth' });
      };

      console.log(productoCarrito);

  return (
   <div className={style.wrapper}>
      <button className={style.boton} onClick={scrollIzquierda}><i className="bi bi-caret-left-square-fill"></i></button>
      <div className={style.contenedor} ref={contenedorRef}>
        {
          producto.map((cel,index)=>{
             return <div className={style.producto} key={index}>
                  <div className={style.imagen}>

                  </div>
                  <div className={style.contenido}>
                    <h3>{cel.nombre}</h3>
                    <h4>{cel.descripcion}</h4>
                    <p>${cel.precio}</p>
                    <button
                        onClick={()=>{setProductoCarrito(cel)}}
                    >Agregar al carrito</button>
                  </div>
             </div> 
          })
        }
    </div>
    <button className={style.boton} onClick={scrollDerecha}><i className="bi bi-caret-right-square-fill"></i></button>
    </div>
  )
}

export default CarruselProductos