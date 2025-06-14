'use client'
import React,{useContext,createContext, useState, useEffect} from 'react';

//Creamos el contexto
const CarContext=createContext();

export const CarProvider=({children})=>{

    const [car,setCar]=useState([]); 

    useEffect(()=>{
        const carritoGuardado=localStorage.getItem('carrito');
        if(carritoGuardado){
            setCar(JSON.parse(carritoGuardado))
        }
    },[])

    useEffect(()=>{
        localStorage.setItem('carrito',JSON.stringify(car))
    },[car])

    const addToCar=(producto)=>{

        const productoAgregado={...producto,cantidad:1,precio:parseFloat(producto.precio)}
        const productoExistente=car.find(item=>item.id===producto.id);
        
        if(productoExistente){
            const nuevoCarrito=car.map(item=>{
                if(item.id===productoAgregado.id){
                    return{
                        ...item,
                        cantidad:item.cantidad+1,
                        precio:item.precio+productoAgregado.precio
                    }

                }
                return item;
            })
            setCar(nuevoCarrito)
        }
        else{
            
            setCar([...car,productoAgregado])
        }
                
    }

    const deleteToCar=(producto)=>{
        const nuevoCarrito=car.filter(item=>{
            if(item.id!==producto.id){
                return item
            }
        })
        setCar(nuevoCarrito)
    }

    return (
       <CarContext.Provider value={{car,setCar,addToCar,deleteToCar}}>
            {children}
       </CarContext.Provider> 
    )
}


export const useCar=()=>useContext(CarContext);