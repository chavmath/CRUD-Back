const express = require('express');
const cors = require('cors');
const routes = require('./routes/routes.js');
const httpProxy = require('http-proxy');
const app = express();
const port = 3000;

// Configurar el proxy
const proxy = httpProxy.createProxyServer();

// Usa cors como middleware permitiendo solicitudes desde cualquier origen
app.use(cors());

// Ruta para redirigir las solicitudes a la API
app.all('/tickets', (req, res) => {
  proxy.web(req, res, { target: 'https://crud-back-mlk9.onrender.com' });
});

app.use('/', routes);

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});
