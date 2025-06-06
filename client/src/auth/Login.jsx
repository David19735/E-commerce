'use client'
import React,{useEffect, useState} from 'react'
import style from '@/styles/Login.module.css';
import Link from 'next/link';
import Alerta from '@/components/Alerta';
import { useRouter } from 'next/navigation';
import { useUsuario } from '@/contextos/userContext';

function Login() {

    const router=useRouter()
    const [icono,setIcono]=useState(true);

    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');

    const[tipo,setTipo]=useState('');
    const[mensaje,setMensaje]=useState('');
    const[estadoAlerta,setEstadoAlerta]=useState(false);

    const [csrfToken,setCsrfToken]=useState('');

  const {obtenerUsuario}=useUsuario();

  useEffect(()=>{
    const getToken=async()=>{
        const res=await fetch('http://localhost:4000/auth/login',{
          credentials:'include'
        })
        const data=await res.json();
        setCsrfToken(data.csrf)
    }
    getToken()
  },[])


    const handleChange=(e)=>{

      switch(e.target.name){
        
        case 'email':
          setEmail(e.target.value);
          break;

        case 'password':
          setPassword(e.target.value);
          break;

      }
    }

    const handleSubmit=async(e)=>{
        e.preventDefault();

        if(email===''||password===''){

          setEstadoAlerta(true);
          setTipo('error')
          setMensaje('Los campos no pueden estar vacíos');
          return;
        }

        const datos={email,password}

        const res=await fetch('http://localhost:4000/auth/login',{
          method:'POST',
          headers:{
            'Content-type':'application/json',
            'X-CSRF-Token':csrfToken
          },
          body:JSON.stringify(datos),
          credentials:'include'
        })

        const data=await res.json();
        setEstadoAlerta(true);
        setTipo(data.tipo);
        setMensaje(data.mensaje)

        if(data.tipo==='exito'){

          await obtenerUsuario;
          router.push('/')
        }
    }


  return (
    <div className={style.container}>

        <form action="" className={style.formulario} data-aos="zoom-in" onSubmit={handleSubmit}>
                <h1>Login</h1>
                <div className={style.contenedor_Input}>
                    <input type="text" placeholder='Email' value={email} onChange={handleChange} name='email'/>
                </div>
                <div className={style.contenedor_Input}>
                <input type={icono?'password':'text'} placeholder='Password' value={password} onChange={handleChange} name='password'/>
                {
                    icono? <i className="bi bi-eye-fill" onClick={()=>{setIcono(false)}}></i>:<i className="bi bi-eye-slash-fill" onClick={()=>{setIcono(true)}}></i>
                }
                </div>

                <div className={style.contenedor_Enlaces}>
                        <Link href={'/registro'}>¿No tienes cuenta? Regístrate</Link>
                        <Link href={'/olvide-password'}>Olvide mi contraseña</Link>
                </div>
                <div className={style.contenedor_Btn}>
                        <button>Login</button>
                </div>


        </form> 
                {
                  estadoAlerta&&
                     <Alerta
                      mensaje={mensaje}
                      tipo={tipo}
                      estadoAlerta={estadoAlerta}
                      setEstadoAlerta={setEstadoAlerta}
                     /> 
                }
    </div>
  )
}

export default Login