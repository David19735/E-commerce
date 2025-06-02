import express from 'express'
import { Principal,CargarProductos } from '../controller/inicioController.js';
import identificarUsuario from '../middleware/identificarUsuario.js';

const router=express.Router();

router.get('/principal',identificarUsuario,Principal);

router.get('/productos',CargarProductos)

export default router;