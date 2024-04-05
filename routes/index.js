

import express from 'express';       // Sintaxis Version Imports
import { 
    paginaInicio, 
    paginaNosotros, 
    paginaViajes, 
    paginaTestimoniales, 
    paginaDetalleViaje 
} from '../controllers/paginasController.js'

import {
    guardarTestimonial
} from '../controllers/testimonialController.js'


const router = express.Router();


// get es uno de los verbos soportados para HTTP (GET, POST, PUT, DELETE, PATCH)
router.get('/', paginaInicio);

router.get('/nosotros', paginaNosotros);

router.get('/viajes', paginaViajes);  // En esta pagina se realizara consulta a la base de datos
router.get('/viajes/:slug', paginaDetalleViaje); // :slug(pueder ser cualquier texto) es un comodin que va a cargar un metodo del controlador

router.get('/testimoniales', paginaTestimoniales);
router.post('/testimoniales', guardarTestimonial);


export default router;




/************************************ PRIMEROS CAMBIOS **********************************************/

/*



import express from 'express';       // Sintaxis Version Imports

const router = express.Router();


// get es uno de los verbos soportados para HTTP (GET, POST, PUT, DELETE, PATCH)
router.get('/', (req, res) => { // req - lo que enviamos, res - lo que express nos responde

    // Creando nuestra propia respuesta
    //res.send('Hola Mundo');  // .send es un metodo utilizado para mostrar algo en pantalla

    
    res.json({
        id: 1
    });        // .json va a retornar una respuesta de json
    

    // .render se utiliza para mostrar una vista, .render('inicio') inicio es el nombre del template engine PUG

    res.render('inicio', {
        pagina: 'Inicio' 
    }); 
});

router.get('/nosotros', (req, res) => { // req - lo que enviamos, res - lo que express nos responde

    // Se puede crear el archivo del controlador, pero para esta prueba lo hacemos aqui.
    //const viajes = 'Viaje a Alemania';

    res.render('nosotros', {  // Aqui dentro del {} simulamos el pasar datos que provienen de un base de datos
        //textoViajes: viajes
        pagina: 'Nosotros' 
    });  // basta con poner el 'nosotros' del archivo .pug para que busque la vista


});

router.get('/viajes', (req, res) => { // req - lo que enviamos, res - lo que express nos responde
    res.render('viajes', { 
        pagina: 'Viajes' 
    });  
});

router.get('/testimoniales', (req, res) => { // req - lo que enviamos, res - lo que express nos responde
    res.render('testimoniales', { 
        pagina: 'Testimoniales' 
    });  
});


export default router;


*/









