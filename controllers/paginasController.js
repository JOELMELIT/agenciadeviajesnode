
import { Viaje } from '../models/Viaje.js'; // Importamos el Modelo Viaje.js
import { Testimonial } from '../models/Testimoniales.js'; // Importamos el Modelo Testimoniales.js

const paginaInicio = async (req, res) => { // req - lo que enviamos, res - lo que express nos responde

    // Consultar 3 viajes del modelo viaje
    const promiseDB = [];
    promiseDB.push( Viaje.findAll({ limit: 3}) ); // Esa sintaxis solo ma traera 3 viajes
    promiseDB.push( Testimonial.findAll({limit : 3}) ); // Esa sintaxis solo ma traera 3 testimoniales
    
    try {
        
        const resultado = await Promise.all( promiseDB );

        res.render('inicio', {
            pagina: 'Inicio',
            clase: 'home',
            viajes: resultado[0],
            testimoniales: resultado[1] 
        }); 
    } catch (error) {
        console.log(error);
    }

}

const paginaNosotros = (req, res) => { // req - lo que enviamos, res - lo que express nos responde
    res.render('nosotros', {  // Aqui dentro del {} simulamos el pasar datos que provienen de un base de datos
        pagina: 'Nosotros' 
    });  // basta con poner el 'nosotros' del archivo .pug para que busque la vista

}

const paginaViajes = async (req, res) => { 
    // Consultar bd
    const viajes = await Viaje.findAll(); // Se trae todos los resultados de la tabla

    console.log(viajes);

    res.render('viajes', { 
        pagina: 'Proximós Viajes',
        viajes,             // Haciendo uso del Object Literal Enhancement
    });  
}

const paginaTestimoniales = async (req, res) => { // req - lo que enviamos, res - lo que express nos responde

    try {

        const testimoniales = await Testimonial.findAll(); // Va a base de datos a consultar todos los registros de la tabla testimoniales

        res.render('testimoniales', { 
            pagina: 'Testimoniales',
            testimoniales                                   // mandamos los datos a la vista de testimoniales.pug
        });  
    } catch (error) {
        console.log(error);
    }

}

// Muestra un viaje por su slug
const paginaDetalleViaje = async (req, res) => {
    //console.log(req.params.viajee);        // req.params se relaciona al comodin del index.js routes
    const { slug } = req.params;  // slug fue definido en el index.js router

    try {
        const viaje = await Viaje.findOne({ where : { slug: slug }}); // Se puede aplicar el object literal enhancement

        res.render('viaje', {
            pagina: 'Informacion Viaje',
            viaje                                                   // Se puede aplicar el object literal enhancement
        })
        
    } catch (error) {
        console.log(error);
    }
}



// Se exporta paginaInicio
export {
    paginaInicio,
    paginaNosotros,
    paginaViajes,
    paginaTestimoniales,
    paginaDetalleViaje
}