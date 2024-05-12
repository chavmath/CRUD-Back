const express = require('express');
const cors = require('cors');
const routes = require('./routes/routes.js');
const app = express();
const port = 3000;

// Usa cors como middleware
app.use(cors({
    origin: '*'
}));

app.use('/', routes);

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});
