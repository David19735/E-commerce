import Usuario from '../models/Usuario.js';
import {Producto,Categoria,Marca} from '../models/index.js';



const Principal=async(req,res)=>{

    const usuarioActivo=req.usuario;

    if(!usuarioActivo){
;
        return res.json({usuario:null});
    }

    return res.json({usuario:usuarioActivo})
}


const CargarProductos=async(req,res)=>{

    const productos=await Producto.findAll({
        include:[
            {
                model:Categoria,
                as:'categoria',
                attributes:['id','nombre']
            },
            {
                model:Marca,
                as:'marca',
                attributes:['id','nombre']
            }
        ]
    });
    
    return res.json(productos)
}

export {
    Principal,
    CargarProductos
}