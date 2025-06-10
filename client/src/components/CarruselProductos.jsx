import React,{useRef, useState} from 'react'
import style from '@/styles/CarruselProductos.module.css'
import Alerta from './Alerta';
import { useCar } from '@/contextos/productosContext';


function CarruselProductos({titulo,producto=[],onAgregar}) {

    const [mensaje,setMensaje]=useState('');
    const [tipo,setTipo]=useState('error');
    const [estadoAlerta,setEstadoAlerta]=useState(false);
    
  const {addToCar}=useCar();

     const contenedorRef = useRef(null);
    
      const scrollIzquierda = () => {
        contenedorRef.current.scrollBy({ left: -300, behavior: 'smooth' });
      };
    
      const scrollDerecha = () => {
        contenedorRef.current.scrollBy({ left: 300, behavior: 'smooth' });
      };


      const autorizarCompra=async(cel)=>{

        const res=await fetch('http://localhost:4000/inicio/principal',{
          credentials:'include'
        })
        const data=await res.json();
        if(!data.usuario){
           setTipo('error')
            setMensaje('Inicia sesión para comprar productos')
            setEstadoAlerta(true);
            return
        }
        onAgregar({cel})        
        addToCar(cel)
      } 
        


  return (
   <div className={style.wrapper}>
      <button className={style.boton} onClick={scrollIzquierda}><i className="bi bi-caret-left-square-fill"></i></button>
      <div className={style.contenedor} ref={contenedorRef}>
        {
          producto.map((cel,index)=>{
             return <div className={style.producto} key={index}>
                  <div className={style.imagen}>
                      <img src={`${cel.imagen}`} alt="" />
                  </div>
                  <div className={style.contenido}>
                    <h3>{cel.nombre}</h3>
                    <h4>{cel.descripcion}</h4>
                    <p>${cel.precio}</p>
                    <button
                        onClick={()=>{
                          autorizarCompra(cel)
                        }}
                    >Agregar al carrito   
                      <i className="bi bi-bag-fill"></i>
                    </button>
                  </div>
             </div> 
          })
        }
    </div>
    <button className={style.boton} onClick={scrollDerecha}><i className="bi bi-caret-right-square-fill"></i></button>
        {
          estadoAlerta&&
          <Alerta
            tipo={tipo}
            mensaje={mensaje}
            estadoAlerta={estadoAlerta}
            setEstadoAlerta={setEstadoAlerta}
          />
        }
    </div>
  )
}

export default CarruselProductos