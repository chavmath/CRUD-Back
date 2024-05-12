const express = require('express');
const router = express.Router();
const controllers = require('../controllers/controllers.js');

router.get('/listainmuebles', controllers.getInmuebles);
router.get('/listacopropietarios/:id', controllers.getCopropietarios);
router.get('/listaunidades/:id', controllers.getUnidades);
router.post('/tickets', controllers.createTicket);
router.get('/listaticketweb/:startDate/:endDate', controllers.getTicketsByDate);

module.exports = router;
