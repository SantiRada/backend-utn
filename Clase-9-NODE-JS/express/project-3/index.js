import express from 'express';
import { heroRoute } from './routes/heroes.js';

const app = express();

// MIDDLEWARE
app.use(express.json());

// ENDPOINT
app.get('/', (req, res) => { res.send("Hola mundo!"); });
app.use('/heroes', heroRoute);

const server = app.listen(3007, () => {
    console.log(`Server en http://localhost:${server.address().port}`);
});