import express, { cors } from 'express';

// import { heroes } from 'heroes.json' assert { type: 'json' };
// import { heroes } from 'heroes.json' with { type: 'json' };
import { readJSON } from './const.js';
import { validateHero } from './schemes/hero.js';

const heroes = readJSON('./json/heroes.json');

const app = express();

app.use(express.json()); // Middleware para recibir req.body
app.use(cors()); // * = Obligatorio

// METODOS: POST, GET, PUT, PATCH, DELETE
// METODOS SIMPLES: GET POST 
// METODOS COMPLEJOS: PUT PATCH DELETE

// CORS PREFLIGHT: Validar a través de OPTIONS los recursos de la consulta

app.get('/', (req, res) => {
    res.status(200).send({ message: "Hola mundo"});
})

app.get('/heroes', (req, res) => {
    res.header('Access-Control-Allow-Origin', '*');
    // const accessURLs = [ '', '', '', '' ];

    // const origin = req.origin;

    // if(accessURLs.includes(origin)){
    //     res.header('Access-Control-Allow-Origin', origin);
    // }

    res.status(200).json(heroes);
});

app.get('/heroes/:id', (req, res) => {
    const { id } = req.params;

    const hero = heroes.find(h => h.id == id);

    if(hero == null){
        res.status(404).json({ message: "ERROR 404" });
    }else{
        res.status(200).json(hero);
    }
});

app.post('/heroes', (req, res) => {   
    const response = validateHero(req.body);

    if(response.success){
        heroes.push(response.data);

        res.status(201).json(response);
    }else{
        res.status(404).send(response.error);
    }
});

app.options('/heroes/:id', (req, res) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
});

app.delete('/heroes/:id', (req, res) => {
    res.header('Access-Control-Allow-Origin', '*');

    const { id } = req.params;

    const hero = heroes.find(h => h.id == id)['nombre'];

    heroes = heroes.filter(hero => hero.id != id);

    if(hero == null) {
        res.status(404).send({ message: 'ERROR' });
        return;
    }

    res.status(200).send({ message: `Se borro a ${hero}` });

});

app.listen(3005, () => {
    console.log(`Servidor en puerto http://localhost:3005`);
})