import express from 'express';
import { CreateRouteHeroes } from './routes/heroes.js';

export const CreateApp = (heroModel) => {
    const app = express();

    const heroRoute = CreateRouteHeroes(heroModel);

    // MIDDLEWARE
    app.use(express.json());
    // app.use(express.cors());

    // ENDPOINT
    app.get('/', (req, res) => { res.send("Hola mundo!"); });
    app.use('/heroes', heroRoute);

    app.use((req, res) => {
        // 404
    });

    const server = app.listen(3007, () => {
        console.log(`Server en http://localhost:${server.address().port}`);
    });
}

