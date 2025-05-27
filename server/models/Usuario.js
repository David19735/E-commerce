import { DataTypes } from "sequelize";
import db from "../config/db.js";
import bcrypt from 'bcrypt'


const Usuario=db.define('usuarios',{
    nombre:{
        type:DataTypes.STRING(20),
        allowNull:false
    },
    apellido1:{
        type:DataTypes.STRING,
        allowNull:false
    },
    apellido2:{
        type:DataTypes.STRING,
        allowNull:false
    },
    email:{
        type:DataTypes.STRING,
        allowNull:false
    },
    password:{
        type:DataTypes.STRING,
        allowNull:false
    },
    token:DataTypes.STRING,
    confirmado:DataTypes.BOOLEAN,
    calle:{
        type:DataTypes.STRING,
        allowNull:false
    },
    colonia:{
        type:DataTypes.STRING,
        allowNull:false
    },
    municipio:{
        type:DataTypes.STRING,
        allowNull:false
    },
    estado:{
        type:DataTypes.STRING,
        allowNull:false
    },
    telefono:{
        type:DataTypes.STRING,
        allowNull:false
    },
    cp:{
        type:DataTypes.STRING,
        allowNull:false
    },
    numero:{
        type:DataTypes.STRING,
        allowNull:false
    },
},{
    hooks:{
        beforeCreate:async function (usuario) {
            const salt=await bcrypt.genSalt(10)
            usuario.password=await bcrypt.hash(usuario.password,salt)
        }
    }
})

//Métodos personalizados

        Usuario.prototype.verificarPassword=function(password){
        return bcrypt.compareSync(password,this.password)
    }

export default Usuario;