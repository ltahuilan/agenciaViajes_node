import express from 'express';
import {
    paginaInicio,
    paginaNosotros,
    paginaViajes,
    paginaTestimoniales,
    paginaDetalleViaje
} from '../controllers/paginasController.js';
import {guardarTestimoniales} from '../controllers/testimonialController.js';
import {administrarViajes, crearViaje} from '../controllers/viajesController.js';

const router = express.Router();

//definiendo rutas... req: lo que se envía... response: lo que el servidor responde
router.get('/', paginaInicio);

router.get('/nosotros', paginaNosotros);

router.get('/viajes', paginaViajes);
router.get('/viaje/:slug', paginaDetalleViaje);

router.get('/testimoniales', paginaTestimoniales);
router.post('/testimoniales', guardarTestimoniales);

router.get('/admin', administrarViajes);
router.get('/admin/crear', crearViaje);

export default router;