import jwt from 'jsonwebtoken';
import Usuario from '../models/Usuario.js';
import dotenv from 'dotenv'
dotenv.config({path:'.env'})

const identificarUsuario=async(req,res,next)=>{

    const {token}=req.cookies;
    
    //Comprobando la existencia del token
    if(!token){
        req.usuario=null;
        return next();
    }

    //Si existe el token vamos a comprobar que usuario está iniciando sesión
  try {
      const decoded=jwt.verify(token,process.env.JWT_SECRET);
    if(!decoded){
        req.usuario=null;
        return next()
    }

    const {id}=decoded;
    const usuario=await Usuario.findByPk(id);
    req.usuario=usuario;
    
    return next();
  } catch (error) {
        req.usuario=null;
        return next();
  }
}


export default identificarUsuario;