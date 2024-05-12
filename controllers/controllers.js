const models = require('../models/models.js');
const { db } = require('../firebase');
const { collection, query, where, orderBy, startAt, endAt, getDocs, addDoc, doc, updateDoc } = require('firebase/firestore');

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
        console.log(req.body); // Verifica el contenido de req.body
        const newTicket = req.body;
        if (!newTicket) {
            throw new Error('No se recibieron datos');
        }
        const ticketsCollection = collection(db, 'tickets');
        const docRef = await addDoc(ticketsCollection, newTicket);
        newTicket.id = docRef.id;
        res.json(newTicket);
    } catch (error) {
        console.error('Error al crear el ticket:', error);
        res.status(500).json({ error: 'Error al crear el ticket' });
    }
};

exports.getTicketsByDate = async (req, res) => {
    const startDate = new Date(req.params.startDate);
    const endDate = new Date(req.params.endDate);
    const ticketsRef = collection(db, 'tickets');
    const q = query(ticketsRef, orderBy('fecha'));
    const querySnapshot = await getDocs(q);
    const tickets = querySnapshot.docs.map(doc => {
        const data = doc.data();
        data.fecha = new Date(data.fecha);
        return data;
    }).filter(ticket => ticket.fecha >= startDate && ticket.fecha <= endDate);
    res.json(tickets);
};