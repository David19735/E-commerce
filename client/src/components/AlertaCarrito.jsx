import React,{useEffect} from 'react'
import {styled,keyframes} from 'styled-components'

function AlertaCarrito({estadoAlerta,setEstadoAlerta,tit,imagen}) {

  useEffect(()=>{
              let tiempo;
              if(estadoAlerta===true){
                 tiempo=setTimeout(()=>{
                      setEstadoAlerta(false);
                  },5000)
              }
              return(()=>clearTimeout(tiempo))
      
          },[estadoAlerta,setEstadoAlerta])

  return (
  <>
   <Contenedor>
      <ContenedorImagen>
        <Imagen src={`${imagen}`}/>
      </ContenedorImagen>
      <Titulo>{tit}</Titulo>
      <Agregado>Agregado al carrito</Agregado>
   </Contenedor>
  </>
  )
}


const slideRight=keyframes`
  0%{
    transform: translateX(2rem);
    opacity: 0;
  }
  30%{
    transform: translateX(0);
    opacity: 1;
  }
  70%{
    transform: translateX(0);
    opacity: 1;
  }
  100%{
     transform: translateX(20rem);
     opacity: 0;
  }
`;

const Contenedor=styled.div`
  width: 200px;
  height: 250px;
  position: fixed;
  right: 10px;
  bottom: 25px;
  z-index: 1000;
  border: solid 2px rgba(0,0,0,0.5);
  box-shadow: -1px 0px 9px 1px rgba(0,0,0,0.75);
  -webkit-box-shadow: -1px 0px 9px 1px rgba(0,0,0,0.75);
  -moz-box-shadow: -1px 0px 9px 1px rgba(0,0,0,0.75);
  background: white;
  animation: ${slideRight} 6s ease forwards;
`;

const ContenedorImagen=styled.div`
  width: 90%;
  height: 60%;
  margin: 0.5rem auto;

`;

const Imagen=styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position:center;

`;

const Titulo=styled.p`
  width: 100%;
  font-size: 1rem;
  text-align: center;
  font-weight:600;
  font-size: 0.9rem;
  margin: 0.7rem 0;
`;

const Agregado=styled.p`
  width: 100%;
  height: 17%;
  background: #0000ff5a;
  margin: 0 auto;
  margin-bottom: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 800;
  color: white;
`;

export default AlertaCarrito