import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import usuarioRoutes from './routes/usuarioRoutes.js'; 
import csrf from 'csurf';
import db from './config/db.js';
import inicioRoutes from './routes/inicioRoutes.js';

//Iniciando app
const app=express();

try {
    await db.authenticate();
    db.sync()
    console.log("Conexión correcta a la base de datos");
} catch (error) {
    console.log(error);
}

//Habilitar lectura de datos de formulario
app.use(express.urlencoded({extended:true}));

//Habilitar cookies
app.use(cookieParser());

//Habilitar NextJs
app.use(express.json());

app.use(cors(
    {
        origin:"http://localhost:3000",
        credentials:true
    }
))

//Habilitar CSRF
const csrfProtection = csrf({ cookie: true });
app.use(csrfProtection);

//Definiendo las rutas a usar   
app.use('/auth',usuarioRoutes);
app.use('/inicio',inicioRoutes);

//Definir un puerto
const port=4000;

app.listen(port,()=>{
    console.log("El servidor está funcionando en el puerto: "+port);
})