const express = require('express');
const router = express.Router();
const controllers = require('../controllers/controllers.js');

router.get('/listainmuebles', controllers.getInmuebles);
router.get('/listacopropietarios/:id', controllers.getCopropietarios);
router.get('/listaunidades/:id', controllers.getUnidades);

module.exports = router;
