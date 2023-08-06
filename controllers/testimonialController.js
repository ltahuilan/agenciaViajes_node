import Testimonial from '../models/Testimonial.js';

const guardarTestimoniales = async (req, res) => {
    //destructuring del objeto
    let {nombre, email, mensaje } = req.body;

    //eliminar espacios en blanco
    nombre = nombre.trim();
    email = email.trim();
    mensaje = mensaje.trim();

    const errores = [];

    //validar el formulario
    if(nombre === '') {
        errores.push('El campo nombre es requerido');
    }
    if(email === '') {
        errores.push('El campo email es requerido');
    }
    if(mensaje === '') {
        errores.push('El campo mensaje es requerido');
    }

    if(errores.length > 0) {
        //consultar los testimoniales almacenados en la BD
        try {
            const testimoniales = await Testimonial.findAll();
            res.render('testimoniales', {
                pagina: 'Testimoniales',
                errores,
                nombre,
                email,
                mensaje,
                testimoniales
            });       
        } catch (error) {
           console.log();            
        }

    }else {
        //guardar en la BD
        try {
            const resultado = await Testimonial.create({
                nombre,
                email,
                mensaje
            });

            //redireccionar si todo es OK
            if(resultado) {                
                res.redirect('/testimoniales');
            }
                        
        } catch (error) {
            console.log(error);            
        }
    }
}

export {
    guardarTestimoniales,
}