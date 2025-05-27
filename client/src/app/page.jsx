'use client'
import React,{useEffect,useState} from 'react'
import Principal from '@/principal/Principal'


function page() {

  const [usuario,setUsuario]=useState({});

useEffect(()=>{

  const cargarUsuario=async()=>{

    const res=await fetch('http://localhost:4000/inicio/principal',{
       credentials: 'include'
    });
    const data=await res.json();
    setUsuario(data);
  }

  cargarUsuario()

},[])

  
  return (
    <>
      <Principal
        usuario={usuario}
      />
    </>
  )
}

export default page