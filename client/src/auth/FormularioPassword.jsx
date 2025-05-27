'use client'
import React, { useEffect, useState } from 'react'
import style from '@/styles/FormularioPassword.module.css';
import Alerta from '@/components/Alerta';
import { useRouter } from 'next/navigation';

function FormularioPassword({token}) {


    const [csrfToken,setCsrfToken]=useState('');
    const [com,setCom]=useState('');
    const [msj,setMsj]=useState('');
    const [mensaje,setMensaje]=useState('');
    const [tipo,setTipo]=useState('');
    const [password,setPassword]=useState('');
    const [password2,setPassword2]=useState('')
    const [estadoAlerta,setEstadoAlerta]=useState('');

    const router=useRouter();

    const [view,setView]=useState(false);

    useEffect(()=>{
        const getToken=async()=>{

            const res=await fetch(`http://localhost:4000/auth/resetpassword/${token}`,{
                credentials:'include'
            });
            
            const data=await res.json();
            setCsrfToken(data.csrf);
            setCom(data.com);
            setMsj(data.msg)
            console.log(data);
        }
        getToken();

    },[])

    const handleChange=(e)=>{
        switch(e.target.name){
            case 'password':
                setPassword(e.target.value)
                break;
            case 'password2':
                setPassword2(e.target.value)    
                break;
        }
    }

    const handleSubmit=async(e)=>{
        e.preventDefault();

        if(password===''||password2===''){

            setEstadoAlerta(true);
            setTipo('error')
            setMensaje('Los campos no pueden estar vacíos');
            return  
        }

        const res=await fetch(`http://localhost:4000/auth/resetpassword/${token}`,{
            method:'POST',
            headers:{
                'Content-type':'application/json',
                'X-CSRF-Token':csrfToken
            },
            body:JSON.stringify({password,password2}),
            credentials:'include'
        })

        const data=await res.json();
        console.log(data);
        setEstadoAlerta(true);
        setMensaje(data.mensaje)
        setTipo(data.tipo)

        router.push('/login')
              
        
    }

  return (
    <div className={style.container}>
        {
            com==='exito'?
            <form className={style.formulario} onSubmit={handleSubmit}>
                    <h3>{msj}</h3>
                    <div className={style.input}>
                    <input type={view===false? 'password':'text'} name="password" placeholder='Escribe tu contraseña'
                        value={password} onChange={handleChange}
                    />
                    {
                        view===false? <i className="bi bi-eye-fill"
                        onClick={()=>{setView(true)}}
                        ></i>:
                        <i className="bi bi-eye-fill"
                        onClick={()=>{setView(false)}}
                        ></i>
                    }
                    </div>
                    <div className={style.input}>
                    <input type={view===false? 'password':'text'} placeholder='Repite la contraseña' name='password2'
                        value={password2} onChange={handleChange}
                    />
                    </div>
                    <button>Enviar</button>
            </form>
            :
            <div className={style.mensaje}>
                    <h2>Enlace visitado incorrecto</h2>
                    <p>{msj}</p>
                    <a href="/olvide-password">Regresar</a>
            </div>
        }
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

export default FormularioPassword