const express = require('express');
const app = express();
app.disable('x-powered-by');
/////////////////////////////////////////////
const heroes = require('./heroes.json');

// MIDDLEWARE
app.use(express.json());
// app.use((req, res, next) => {

//     if (req.method !== 'POST') { return next(); }

//     let body = '';

//     req.on('data', (chunk) => {
//         body += chunk.toString();
//     });

//     req.on('end', () => {
//         const DATA = JSON.parse(body);
//         req.body = DATA;
//         next();
//     });
// });

// SERVER

app.get('/', (req, res) => {
    res.status(200).send('Hola!');
});

app.get('/heroes', (req, res) => {
    res.status(200).json(heroes);
});

app.get('/heroes/:id', (req, res) => {
    const { id } = req.params;

    let hero = heroes.find(h => (h.id == id || h.name.toLocaleLowerCase() == id.toLocaleLowerCase()));

    if(hero != null) { res.status(200).send(hero); }
    else { res.status(404).send({ "message": "No se encontró el heroe" }); }
});

app.post('/heroes', (req, res) => {

    // Conectar con bases de datos .sql //          TS // JS
    // Manejar archivos con FileSystem (node:fs)
    
    heroes.push(req.body);
    res.status(201).send(req.body);
});

app.use((req,res) => {
    res.status(404).send({ "message": "404 Not Found" });
});

app.listen(3005, () => { console.log(`El servidor esta en el puerto http://localhost:3005`); });