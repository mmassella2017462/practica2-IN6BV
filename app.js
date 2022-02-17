const express = require('express');
const cors = require('cors');
const app = express();

// IMPORTACION RUTAS


    const usuariosRou = require('./src/routes/usuarios.routes');
    const cursosRou = require('./src/routes/cursos.routes');
    const asignacionRou = require('./src/routes/asignaciones.routes');

// MIDDLEWARES
    app.use(express.urlencoded({ extended: false}));
    app.use(express.json());

// CABECERAS
    app.use(cors());

// CARGA DE RUTAS localhost:3000/api/productos
    app.use('/api', usuariosRou,cursosRou,asignacionRou);

module.exports = app;