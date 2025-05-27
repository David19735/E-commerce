'use client'
import React, { useState,useEffect } from 'react'
import style from '@/styles/Registro.module.css'
import Link from 'next/link';
import Alerta from '@/components/Alerta';
import { useRouter } from 'next/navigation';

function Registro() {

    const router=useRouter();

    const [form,setForm]=useState(false);

    const[nombre,setNombre]=useState('')
    const[apellido1,setApellido1]=useState('')
    const[apellido2,setApellido2]=useState('')
    const[email,setEmail]=useState('')
    const[password,setPassword]=useState('')

    const[calle,setCalle]=useState('')
    const[colonia,setColonia]=useState('')
    const[municipio,setMunicipio]=useState('')
    const[estado,setEstado]=useState('')
    const[telefono,setTelefono]=useState('')
    const[cp,setCp]=useState('')
    const[numero,setNumero]=useState('')

    const [csrfToken,setCsrfToken]=useState('');

    const [tipo,setTipo]=useState('');
    const [mensaje,setMensaje]=useState('');
    const [estadoAlerta,setEstadoAlerta]=useState(false);


    useEffect(()=>{
        const getToken=async()=>{
            
            const res=await fetch('http://localhost:4000/auth/registro',{
                credentials:'include'
            });
            const data=await res.json();
            setCsrfToken(data.csrf);
        }

        getToken();
    },[])


    const handleChange=(e)=>{
        switch(e.target.name){
            case 'nombre':
                setNombre(e.target.value);
                break;
            case 'apellido1':
                setApellido1(e.target.value);
                break;
            case 'apellido2':
                setApellido2(e.target.value);
                break;
            case 'email':
                setEmail(e.target.value);
                break;
            case 'password':
                setPassword(e.target.value);
                break;
            case 'calle':
                setCalle(e.target.value);
                break;
            case 'colonia':
                setColonia(e.target.value);
                break;
            case 'municipio':
                setMunicipio(e.target.value);
                break;
            case 'estado':
                setEstado(e.target.value);
                break;
            case 'cp':
                setCp(e.target.value);
                break;
            case 'numero':
                setNumero(e.target.value);
                break;
            case 'telefono':
                setTelefono(e.target.value);
                break;    
            default:
                console.log("No reconocido");
                break;                
                                        
        }
    }

    const handleSubmit=async(e)=>{
        e.preventDefault();
        
        if(nombre===''||apellido1===''||apellido2===''||email===''||password===''||calle===''||colonia===''||municipio===''||estado===''||telefono===''||cp===''||numero===''){
            setEstadoAlerta(true);
            setTipo('error');
            setMensaje('Rellena todos los campos');
            return;
        }

        const datos={nombre,apellido1,apellido2,email,password,calle,colonia,municipio,estado,telefono,cp,numero}

        
        const res=await fetch('http://localhost:4000/auth/registro',{
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
        setTipo(data.tipo)
        setMensaje(data.mensaje);
        
        if(data.tipo==='exito'){
            router.push('/mensajeCorreo')
        }
    }

  return (
    <div className={style.container}>
        <video autoPlay muted loop playsInline className={style.bg_video}>
        <source src='/bg/mixkit-animation-of-futuristic-devices-99786-hd-ready.mp4' type="video/mp4"/>
        </video>
        <form className={style.formulario} data-aos="zoom-in" onSubmit={handleSubmit}>
                <h2>Registro</h2>
                {
                    form===false ?
                    <div className={style.contenedor1}>
                        <input type="text" placeholder='Nombre' name='nombre' value={nombre} onChange={handleChange}/>
                        <input type="text" placeholder='Primer apellido' name='apellido1' value={apellido1} onChange={handleChange}/>
                        <input type="text" placeholder='Segundo Apellido' name='apellido2' value={apellido2} onChange={handleChange}/>
                        <input type="email" placeholder='Correo Electrónico' name='email' value={email} onChange={handleChange}/>
                        <input type="password" placeholder='Contraseña' name='password' value={password} onChange={handleChange}/>
                        <div className={style.contendorBtn1}>
                            <div className={style.enlace}>
                                <Link href={'/login'}>¿Ya tienes cuenta? Inicia Sesión</Link>
                                <Link href={'/olvide-password'}>¿Olvidaste tu contraseña?</Link>
                            </div>
                            <button type='button' onClick={()=>{setForm(true)}}>Siguiente</button>
                        </div>
                    </div>
                    :
                    <div className={style.contenedor2}>
                       <input type="text" placeholder='Calle' name='calle' value={calle} onChange={handleChange}/>
                        <input type="text" placeholder='Colonia' name='colonia' value={colonia} onChange={handleChange}/>
                        <input type="text" placeholder='Municipio' name='municipio' value={municipio} onChange={handleChange}/>
                        <input type="text" placeholder='Estado' name='estado' value={estado} onChange={handleChange}/>
                        <input type="text" placeholder='Teléfono' name='telefono' value={telefono} onChange={handleChange}/>
                        <div className={style.pequeno}>
                            <input type="text" placeholder='CP' name='cp' value={cp} onChange={handleChange}/>
                            <input type="text" placeholder='Número' name='numero' value={numero} onChange={handleChange}/>
                        </div>
                        <div className={style.contendorBtn2}>
                            <button type='button' onClick={()=>{setForm(false)}}>Regresar</button>
                            <button type='submit'>Enviar</button>
                        </div>
                    </div>
                }
        </form>
        {
            estadoAlerta&&
            <Alerta
                mensaje={mensaje} tipo={tipo} estadoAlerta={estadoAlerta} setEstadoAlerta={setEstadoAlerta}
            />
        }
    </div>

  )
}

export default Registro