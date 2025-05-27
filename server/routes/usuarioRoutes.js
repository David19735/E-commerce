import express from 'express'
import { Registro,FormularioRegistro,Login,FormularioLogin,ResetPassword,FormularioResetPassword,ConfirmarCuenta,CambiarContrasena,FormularioCambiarContrasena} from '../controller/UsuarioController.js';

const router=express.Router();


router.get('/registro',Registro)
router.post('/registro',FormularioRegistro)

router.get('/login',Login)
router.post('/login',FormularioLogin)

router.get('/resetpassword',ResetPassword)
router.post('/resetpassword',FormularioResetPassword)

router.get('/resetpassword/:token',CambiarContrasena)
router.post('/resetpassword/:token',FormularioCambiarContrasena)

router.get('/registro/:token',ConfirmarCuenta)

export default router;