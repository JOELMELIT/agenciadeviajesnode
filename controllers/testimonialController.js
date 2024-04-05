
import { Testimonial } from '../models/Testimoniales.js'

const guardarTestimonial = async (req, res) => {
    
    // Validar...
    const { nombre, correo, mensaje} = req.body; // req.body - va a ser lo que el usuario ponga en el formulario de testimoniales

    const errores = [];

    if(nombre.trim() === ''){
        errores.push({mensaje: 'El nombre esta vacio'});
    }
    if(correo.trim() === ''){
        errores.push({mensaje: 'El correo esta vacio'});
    }
    if(mensaje.trim() === ''){
        errores.push({mensaje: 'El mensaje esta vacio'});
    }

    //console.log(errores);

    if(errores.length > 0) {

        // Consultar testimoniales existentes
        const testimoniales = await Testimonial.findAll();

        // Mostrar la vista con errores
        res.render('testimoniales', {        // Esta es la vista que se carga cuando hay un error
            pagina: 'Testimoniales',
            errores,
            nombre,                         // Podriamos mandar igual el nombre, correo y mensaje para usarlos en los inputs y que la informacion previamente ingresada no se este borrando en cada submit
            correo, 
            mensaje,
            testimoniales
        })
    } else {
        // Almacenarlo en la base de datos
        try {
            await Testimonial.create({
                nombre,
                correo,
                mensaje
            });
            res.redirect('/testimoniales');
        } catch (error) {
            console.log(error);
        }

    }


    //console.log(req.body); // req.body - va a ser lo que el usuario ponga en el formulario de testimoniales
}



// Se exporta
export {
    guardarTestimonial
}