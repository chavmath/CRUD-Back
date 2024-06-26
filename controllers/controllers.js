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

exports.getTicketsByDate = async (req, res) => {
    const startDate = new Date(req.params.startDate);
    const endDate = new Date(req.params.endDate);
    endDate.setUTCHours(23, 59, 59, 999); // Ajusta la fecha final para incluir todo el día
    const ticketsRef = collection(db, 'tickets');
    const q = query(ticketsRef, orderBy('fechacreacion'));
    const querySnapshot = await getDocs(q);
    const tickets = querySnapshot.docs.map(doc => {
        const data = doc.data();
        data.fecha = new Date(data.fecha);
        return data;
    }).filter(ticket => ticket.fecha >= startDate && ticket.fecha <= endDate);
    res.json(tickets);
};

exports.login = async (req, res) => {
    const identificacion = req.params.identificacion;
    const contrasena = req.params.contrasena;
    const usersRef = collection(db, 'users');
    const q = query(usersRef, where('identificacion', '==', identificacion), where('contrasena', '==', contrasena));
    const querySnapshot = await getDocs(q);
    const user = querySnapshot.docs.map(doc => doc.data())[0];
    if (user) {
        res.json(user);
    } else {
        res.status(404).send('Usuario no encontrado');
    }
};
