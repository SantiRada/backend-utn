import express from 'express';
import { CreateRouteHeroes } from './routes/heroes.js';
import { CreateRouteComics } from './routes/comics.js';
import { CreateRouteUsers } from './routes/users.js';

export const CreateApp = (heroModel, comicModel, userModel) => {
    const app = express();

    const heroRoute = CreateRouteHeroes(heroModel);
    const comicRoute = CreateRouteComics(comicModel);
    const userRoute = CreateRouteUsers(userModel);

    // MIDDLEWARE
    app.use(express.json());
    app.use((req, res, next) => {

        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, OPTIONS, DELETE');

        next();
    });
    app.options('*', (req, res) => {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
        res.send();
    });

    // ENDPOINT
    app.get('/', (req, res) => { res.send("Hola mundo!"); });
    app.use('/users', userRoute);
    app.use('/heroes', heroRoute);
    app.use('/comics', comicRoute);

    const server = app.listen(3007, () => {
        console.log(`Server en http://localhost:${server.address().port}`);
    });
}

// 1. Revisar el "verify" de bcrypt.compare()
// 2. Limpiar error de CORS del index.html para aplicar EJS