'use client'
import React,{useState,useEffect} from 'react'
import Videojuegos from '@/principal/Videojuegos';

function page() {

    const [productos,setProductos]=useState([]);
  
    useEffect(()=>{
  
      const getProduct=async()=>{
  
        const res=await fetch('http://localhost:4000/inicio/productos');
        const data=await res.json();
        setProductos(data)
  
      }
  
      getProduct();
  
    },[])

    const datos=productos.filter(juego=>{
    if(juego.categoria.id===3){
      return juego
    }
  })

  return (
    <>
    <Videojuegos
      datos={datos}
    />
    </>
  )
}

export default page