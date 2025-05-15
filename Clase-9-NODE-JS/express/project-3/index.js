import express from 'express';
import { CreateRouteHeroes } from './routes/heroes.js';
import { CreateRouteComics } from './routes/comics.js';

export const CreateApp = (heroModel, comicModel) => {
    const app = express();

    const heroRoute = CreateRouteHeroes(heroModel);
    const comicRoute = CreateRouteComics(comicModel);

    // MIDDLEWARE
    app.use(express.json());
    // app.use(express.cors());

    // ENDPOINT
    app.get('/', (req, res) => { res.send("Hola mundo!"); });
    app.use('/heroes', heroRoute);
    app.use('/comics', comicRoute);

    app.use((req, res) => {
        // 404
    });

    const server = app.listen(3007, () => {
        console.log(`Server en http://localhost:${server.address().port}`);
    });
}

