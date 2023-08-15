
//const express = require('express'); //sintaxis commonjs en desuso
import express from 'express'; //sintaxis con soporte nativo en JS usando imports y exports
import router from './routes/index.js';
import db from './config/db.js';

//ejecutar express como funcion
const app = express();

//definir puerto
const port = process.env.PORT || 3000;

//habilitar el uso del template engine PUG
app.set('view engine', 'pug');

//definir la carpeta publica
app.use(express.static('public'));

//conectar con la BD
db.authenticate()
    .then( () => {
        console.log('Connection to DB suceess...');
    })
    .catch( error => {
        console.log(error);
    });

//agregar variables a locals
app.use( (req, res, next) => {
    const year = new Date();
    res.locals.fullYear = year.getFullYear();
    res.locals.nombreSitio= 'Agencia de Viajes';
    next();
});

//agregar body parser para leer datos desde un formulario
app.use(express.urlencoded({ extended: true}));

//usar el router
app.use('/', router);

app.listen(port, () => {
    console.log(`Executing express on port ${port}`);
});
