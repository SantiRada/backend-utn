import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

import { routeForSeries, SeriesRoute } from './routes/Series.js';

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors({
    origin: 'http://localhost:5173'
}));

export default function createApp (model) {
    app.get('/', (req, res) => { res.send("Hola mundo"); });

    // ------------ SECTOR CONSTRUCTORES ------------ //
    SeriesRoute(model);
    // ------------ SECTOR CONSTRUCTORES ------------ //

    // ------------ SECTOR ROUTES ------------ //
    app.use('/series', routeForSeries);
    // ------------ SECTOR ROUTES ------------ //

    app.use((req, res) => {
        res.status(404).json({message: '404 Not Found'});
    });
}


const server = app.listen(process.env.PORT, () => {
    console.log(`Servidor encendido en http://localhost:${server.address().port}`);
});