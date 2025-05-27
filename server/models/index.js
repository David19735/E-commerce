import Categoria from "./Categoria.js";
import Marca from "./Marca.js";
import Producto from './Producto.js';
import Mensaje from './Mensaje.js';
import Usuario from './Usuario.js'


Mensaje.belongsTo(Usuario,{foreignKey:'usuarioId'})
Producto.belongsTo(Marca,{foreignKey:'marcaId'})
Producto.belongsTo(Categoria,{foreignKey:'categoriaId'})

export {
    Categoria,
    Mensaje,
    Marca,
    Producto,
    Usuario
}