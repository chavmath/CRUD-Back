const express = require('express');
const cors = require('cors');
const routes = require('./routes/routes.js');
const app = express();
const port = 3000;

// Usa cors como middleware permitiendo solicitudes desde cualquier origen
app.use(cors());

app.use('/', routes);

app.use(express.json());

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Error interno del servidor');
  });

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});
