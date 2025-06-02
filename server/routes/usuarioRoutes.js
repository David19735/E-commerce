import express from 'express'
import { Registro,FormularioRegistro,Login,FormularioLogin,ResetPassword,FormularioResetPassword,ConfirmarCuenta,CambiarContrasena,FormularioCambiarContrasena,CerrarSesion,BotonCerrarSesion} from '../controller/UsuarioController.js';

const router=express.Router();

//Inicio de sesión
router.get('/registro',Registro)
router.post('/registro',FormularioRegistro)

//ciere de sesión
router.get('/cerrar-sesion',CerrarSesion)
router.post('/cerrar-sesion',BotonCerrarSesion)

router.get('/login',Login)
router.post('/login',FormularioLogin)

router.get('/resetpassword',ResetPassword)
router.post('/resetpassword',FormularioResetPassword)

router.get('/resetpassword/:token',CambiarContrasena)
router.post('/resetpassword/:token',FormularioCambiarContrasena)

router.get('/registro/:token',ConfirmarCuenta)

export default router;