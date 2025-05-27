import { DataTypes } from "sequelize";
import db from "../config/db.js";

const Producto=db.define('productos',{

    nombre:{
        type:DataTypes.STRING,
        allowNull:false
    },
    precio:{
        type:DataTypes.STRING,
        allowNull:false
    },
    descripcion:{
        type:DataTypes.STRING,
        allowNull:false
    },
    imagen:{
        type:DataTypes.STRING,
        allowNull:false
    }

})


export default Producto;