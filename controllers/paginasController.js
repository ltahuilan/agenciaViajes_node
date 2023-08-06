import Viaje from '../models/Viaje.js';
import Testimonial from '../models/Testimonial.js';

const paginaInicio = async (req, res) => {

    //arreglo de consultas
    const consultas = [];
    consultas.push(Viaje.findAll({ limit:3}));
    consultas.push(Testimonial.findAll({ limit:3}));

    //query para traer 3 registros de la BD
    try {
        // const viajes = await Viaje.findAll({ limit:3});
        // const testimoniales = await Testimonial.findAll({ limit:3});

        //consulta sincrona con Promise.all()
        const resultado = await Promise.all(consultas);

        res.render('inicio', {
            pagina : 'Inicio',
            clase: 'home',
            viajes: resultado[0],
            testimoniales: resultado[1]
        });
    } catch (error) {
        console.log(error);
    }
};

const paginaNosotros = (req, res) => {
    res.render('nosotros',{
        pagina : 'Nosotros'
    });
};

const paginaViajes = async (req, res) => {
    const viajes = await Viaje.findAll();    
    res.render('viajes', {
        pagina : 'Próximos Viajes',
        viajes
    });
};

const paginaTestimoniales = async (req, res) => {

    try {
        const testimoniales = await Testimonial.findAll();

        res.render('testimoniales', {
            pagina : 'Testimoniales',
            testimoniales
        });
        
    } catch (error) {
        console.log(error);        
    }
};

const paginaDetalleViaje = async (req, res) => {
    const slug = req.params.slug;
    try {
        //consultar un viaje por el slug de la url en la BD
        const viaje = await Viaje.findOne({ where : { slug:slug }});
        
        res.render('viaje', {
            pagina : 'Información Viaje',
            viaje
        });

    } catch (error) {
        console.log(error);
    }
};

export {
    paginaInicio,
    paginaNosotros,
    paginaViajes,
    paginaTestimoniales,
    paginaDetalleViaje
}