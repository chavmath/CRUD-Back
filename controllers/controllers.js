const models = require('../models/models.js');
const { db } = require('../firebase');
const { collection, getDocs, addDoc, doc, updateDoc } = require('firebase/firestore');

exports.getInmuebles = (req, res) => {
    res.json(models.inmuebles);
};

exports.getCopropietarios = (req, res) => {
    res.json(models.copropietarios[req.params.id] || []);
};

exports.getUnidades = (req, res) => {
    res.json(models.unidades[req.params.id] || {});
};

exports.createTicket = async (req, res) => {
    try {
        const newTicket = req.body;
        const ticketsCollection = collection(db, 'tickets');
        const docRef = await addDoc(ticketsCollection, newTicket);
        newTicket.id = docRef.id;
        res.json(newTicket);
    } catch (error) {
        console.error('Error al crear el ticket:', error);
        res.status(500).json({ error: 'Error al crear el ticket' });
    }
};