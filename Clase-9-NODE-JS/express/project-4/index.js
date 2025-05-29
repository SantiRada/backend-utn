import express from 'express';
import { heroRoute } from './routes/HeroRoute.js';

const app = express();

app.use(express.json());

app.get('/', (req, res) => { res.send('Hello, World!'); });

app.use('/heroes', heroRoute);

app.use('/', (req, res) => {
    res.status(404).send('404 Not Found.');
});

const server = app.listen(3008, () => {
    console.log(`Server is running on http://localhost:${server.address().port}`);
});