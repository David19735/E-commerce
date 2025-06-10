'use client'
import React,{useContext,createContext, useState, useEffect} from 'react';

//Creamos el contexto
const CarContext=createContext();

export const CarProvider=({children})=>{

    const [car,setCar]=useState([]); 
 

    const addToCar=(producto)=>{
        
        setCar([...car,producto])
        
    }

    return (
       <CarContext.Provider value={{car,setCar,addToCar}}>
            {children}
       </CarContext.Provider> 
    )
}


export const useCar=()=>useContext(CarContext);