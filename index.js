const express = require('express');
const routes = require('./routes/routes.js');
const app = express();
const port = 3000;

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
  });

app.use('/', routes);

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});
