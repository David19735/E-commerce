import Usuario from "../models/Usuario.js";
import { generarId, generarJwt } from "../helpers/tokens.js";
import { emailRegistro,emailPassword } from "../helpers/emails.js";
import bcrypt from 'bcrypt';


const Registro=(req,res)=>{

    return res.json({csrf:req.csrfToken()})
}

const FormularioRegistro=async(req,res)=>{

    const{nombre,apellido1,apellido2,email,password,calle,colonia,municipio, estado, telefono,cp,numero}=req.body;


    if(nombre===''||apellido1===''||apellido2===''||email===''||password===''||calle===''||colonia===''||municipio===''||estado===''||telefono===''||cp===''||numero===''){

        return res.json({tipo:'error',mensaje:'Los campos no pueden estar vacíos'})
    }

    if(password.length<8){

        return res.json({tipo:'error',mensaje:'La contraseña debe contener al menos 8 carácteres'})
    }

        const usuarioExistente=await Usuario.findOne({where:{email}});

    if(usuarioExistente){

        return res.json({tipo:'error',mensaje:'El email ya se encuentra registrado'})
    }

    //Aquí se almacena el usuario
    const usuario=await Usuario.create({nombre,apellido1,apellido2,email,password,token:generarId(),confirmado:0,calle,colonia,municipio, estado, telefono,cp,numero})

    //Enviar el email de registro
    emailRegistro({
        nombre:usuario.nombre,
        email:usuario.email,
        token:usuario.token
    })


    return res.json({tipo:'exito',mensaje:'Usuario registrado'});
}

const Login=(req,res)=>{

    return res.json({csrf:req.csrfToken()})
}

const FormularioLogin=async(req,res)=>{

    const {email,password}=req.body;

    const usuario=await Usuario.findOne({where:{email}});

    if(!usuario){

        return res.json({tipo:'error',mensaje:'Usuario no registrado'})
    }

    if(!usuario.confirmado){

        return res.json({tipo:'error',mensaje:'No has confirmado tu cuenta'})
    }

    if(!usuario.verificarPassword(password)){

        return res.json({tipo:'error',mensaje:'Contraseña incorrecta'})
    }

    //Generando el jwt

    const token=generarJwt({id:usuario.id,nombre:usuario.nombre})

     //Almacenar token en cookie
   res.cookie("token", token, {
    httpOnly: true, // Evita que el token sea accesible desde JavaScript en el navegador
    secure: true, // Solo en HTTPS (desactiva en local si es necesario)
    sameSite: "Strict", // Evita envío de cookies en solicitudes de terceros
  });

    return res.json({tipo:'exito',mensaje:'Ingresando a tu cuenta'})
}

const ResetPassword=(req,res)=>{

    return res.json({csrf:req.csrfToken()})
}

const FormularioResetPassword=async(req,res)=>{

    const {email}=req.body;
 
    const usuario=await Usuario.findOne({where:{email}});

    if(!usuario){

        return res.json({tipo:'error',mensaje:'El correo no se encuentra registrado'})
    }

    const token=generarId();
    usuario.token=token;
    usuario.save();

    emailPassword({
        nombre:usuario.nombre,
        email:usuario.email,
        token:usuario.token
    })

    return res.json({tipo:'exito',mensaje:'Datos enviados'})
}

const ConfirmarCuenta=async(req,res)=>{

    const {token}=await req.params;
    
    const usuario=await Usuario.findOne({where:{token}});

    if(!usuario){

        return res.json({tipo:'error',mensaje:'El enlace que estás visitando para confirmar tu cuenta no es correcto, por favor, revisa tu bandeja de entrada'})
    }

    usuario.token=null;
    usuario.confirmado=1;
    usuario.save();

    return res.json({csrf:req.csrfToken(),tipo:'exito',mensaje:'Cuenta confirmada con éxito, ya puedes iniciar sesión en la página principal y empezar a agregar productos a tu carrito'})
}

const CambiarContrasena=async(req,res)=>{

    const {token}=req.params;
    
    const usuario=await Usuario.findOne({where:{token}});

    if(!usuario){

        return res.json({com:'error',msg:'El enlace que estás visitando es incorrecto, verifica tu bandeja de entrada para que puedas realizar el cambio de contraseña',csrf:req.csrfToken()})
    }



    return res.json({csrf:req.csrfToken(),com:'exito',msg:'Realiza el cambio de tu contraseña'})
}

const FormularioCambiarContrasena=async(req,res)=>{

    const {password,password2}=req.body;
    const {token}=req.params;

    const usuario=await Usuario.findOne({where:{token}});
   
    if(password.length<8){

        return res.json({tipo:'error',mensaje:'La contraseña debe contener al menos 8 carácteres'})
    }

    if(password!==password2){

        return res.json({tipo:'error',mensaje:'Las contraseñas deben coincidir'})
    }

    const salt=await bcrypt.genSalt(10)
    usuario.password=await bcrypt.hash(password,salt)
    usuario.token=null;
    await usuario.save();
    
    return res.json({tipo:'exito',mensaje:'Contraseña reestablecida'})
}



export {
    Registro,
    FormularioRegistro,
    Login,
    FormularioLogin,
    ResetPassword,
    FormularioResetPassword,
    ConfirmarCuenta,
    CambiarContrasena,
    FormularioCambiarContrasena
}