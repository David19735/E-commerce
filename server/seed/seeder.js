import * as modelos from '../models/index.js'
const {Categoria,Mensaje,Marca,Producto}=modelos;
import marcas from "./marca.js";
import categorias from "./categorias.js";
import mensajes from './mensajes.js'
import productos from '../seed/productos.js'
import db from '../config/db.js'
import {exit} from 'node:process'
import sequelize from '../config/db.js';


const importarDatos=async()=>{

    try {
        
        //autenticar la base de datos
        await db.authenticate();

        //generar las columnas
        await db.sync();

        //insertamos los datos
    
        await Mensaje.bulkCreate(mensajes);
        await Categoria.bulkCreate(categorias);
        await Marca.bulkCreate(marcas);
        await Producto.bulkCreate(productos)

        console.log("Datos importados correctamente");
        exit(0)

    } catch (error) {
        console.log(error);
        exit(1);
    }
}

const eliminarDatos=async()=>{

    try {
        
        await sequelize.query('SET FOREIGN_KEY_CHECKS = 0');
        await Categoria.destroy({ where:{},truncate:true })
        await Marca.destroy({where:{},truncate:true})
        await Mensaje.destroy({where:{},truncate:true})
        await Producto.destroy({where:{},truncate:true})

        console.log("Eliminando datos correctamente");
        exit(0)

    } catch (error) {
        console.log(error);
        exit(1)
    }

}


if(process.argv[2]==="-i"){

    importarDatos();
}


if(process.argv[2]==="-e"){

    eliminarDatos();
}