
// Realizamos la configuracion de express

// Importamos express y lo asignamos a la variable express
//const express = require('express');  // Sintaxis Common JS

import express from 'express';       // Sintaxis Version Imports
import router from './routes/index.js'
import db from './config/db.js'

// express() contiene una funcion para ejecutar express y lo asignamos a app
const app = express();      // Solo se puede tener una instancia de express

// Conectar la base de datos
db.authenticate()
    .then( () => console.log('Base de datos conectada!') )
    .catch( error => console.log( error ));



// Definir Puerto
// process.env.PORT - Variable de entorno
const port = process.env.PORT || 4000;

// Habilitar el Template Engine (V - Vista del Modelo MVC) llamado PUG
app.set('view engine', 'pug');                                                              // Esto es una linea de middleware

// Obtener el año actual
app.use( (req, res, next) => {  // como las lines de express se ejecutan en cascada, next indica que despues de ejecutar la operacion se brinque al siguiente middleware

    const year = new Date();

    // locals son variables internas de express donde podemos agregar nuestras propias variables y usarlas en las vistas .pug
    res.locals.actualYear = year.getFullYear();
    res.locals.nombresitio = "Agencia de Viajes";
    next();
});

//  Agregar body parser para leer los datos del formulario
app.use(express.urlencoded({extended: true}));

// Definir la capeta publica (ejemplo: css, img....)                                        // Esto es una linea de middleware
app.use(express.static('public'));


// Agregar Router
app.use('/', router);        // .use soporta los verbos GET, POST, PUT, PATCH Y DELETE      // Esto es una linea de middleware


// Aqui le decimos, arrcanca el servidor con este metodo lamado listen
app.listen(port, () => {
    console.log(`El servidor esta funcionando en el puerto ${port}`);
})














