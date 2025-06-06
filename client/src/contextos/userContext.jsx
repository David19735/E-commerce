'use client';
import React,{useState,useEffect, useContext, createContext} from "react";

//Creamos el contexto
const UserContext=createContext();

//Component proovedor que va a envolver a la aplicación
export const UserProvider=({children})=>{

    const [usuario,setUsuario]=useState(null);
    const [cargando,setCargando]=useState(true);

    useEffect(()=>{

        const obtenerUsuario=async()=>{

            try {
                
                const res=await fetch('http://localhost:4000/inicio/principal',{
                    credentials:'include'
                })
                const data=await res.json();
                setUsuario(data.usuario)

            } catch (error) {
                setUsuario(null)
            }
            finally{
                setCargando(false)
            }

        }

        obtenerUsuario();

    },[])
    
    return(
        <UserContext.Provider value={{usuario,cargando,setUsuario}}>
            {children}
        </UserContext.Provider>
    )
}

//Hook personalizado para acceder al contexto
export const useUsuario=()=>{
    const context=useContext(UserContext);
    if(!context){
        throw new Error('useUsuario debe usarse dentro de <UserProvider>')
    }
    return context;
}