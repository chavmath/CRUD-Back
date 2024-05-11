const models = require('../models/models.js');

exports.getInmuebles = (req, res) => {
    res.json(models.inmuebles);
};

exports.getCopropietarios = (req, res) => {
    res.json(models.copropietarios[req.params.id] || []);
};

exports.getUnidades = (req, res) => {
    res.json(models.unidades[req.params.id] || {});
};
