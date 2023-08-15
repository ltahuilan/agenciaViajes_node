import Viaje from '../models/Viaje.js';

export const administrarViajes = async (req, res) => {
    
    //consultar los viajes
    const viajes = await Viaje.findAll();

    res.render('admin/index', {
        'pagina': 'Administrador de Viajes',
        viajes
    });
}
export const crearViaje = (req, res) => {

    res.render('admin/crear', {
        'pagina': 'Crear Viaje'
    });
}