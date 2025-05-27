import Usuario from '../models/Usuario.js';

const Principal=async(req,res)=>{

    const usuarioActivo=req.usuario;

    if(!usuarioActivo){
;
        return res.json({usuario:null});
    }

    return res.json({usuario:usuarioActivo})
}

export {
    Principal
}