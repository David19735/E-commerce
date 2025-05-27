import express from 'express'
import { Principal } from '../controller/inicioController.js';
import identificarUsuario from '../middleware/identificarUsuario.js';

const router=express.Router();

router.get('/principal',identificarUsuario,Principal);

export default router;