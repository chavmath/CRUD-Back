const express = require('express');
const router = express.Router();
const controllers = require('../controllers/controllers.js');

router.get('/listainmuebles', controllers.getInmuebles);
router.get('/listacopropietarios/:id', controllers.getCopropietarios);
router.get('/listaunidades/:id', controllers.getUnidades);
router.get('/listaticketweb/:startDate/:endDate', controllers.getTicketsByDate);
router.get('/login/:identificacion/:contrasena', controllers.login);

module.exports = router;
