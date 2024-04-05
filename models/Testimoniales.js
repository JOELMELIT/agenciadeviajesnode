
import Sequelize from 'sequelize';
import db from '../config/db.js'

// La tabla se llama testimoniales y {} es el objeto de configuracion
export const Testimonial = db.define('testimoniales', {
    nombre: {
        type: Sequelize.STRING
    },
    correo: {
        type: Sequelize.STRING
    },
    mensaje: {
        type: Sequelize.STRING
    }
});


// No es necesario agregar la columna id, porque el ORM Sequelize da por hecho que tenemos ese campo id