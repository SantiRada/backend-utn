import express from 'express';
import { CreateRouteHeroes } from './routes/heroes.js';
import { CreateRouteComics } from './routes/comics.js';
import { CreateRouteUsers } from './routes/users.js';

export const CreateApp = (heroModel, comicModel, userModel) => {
    const app = express();

    const heroRoute = CreateRouteHeroes(heroModel);
    const comicRoute = CreateRouteComics(comicModel);
    const userRoute = CreateRouteUsers(userModel);

    app.set('view engine', 'ejs');

    // MIDDLEWARE
    app.use(express.json());

    // ENDPOINT
    app.get('/', (req, res) => { res.render('index'); });
    app.get('/system', (req, res) => {
        res.render('system', {
            user: 'Santiago'
        });
    });
    app.use('/users', userRoute);
    app.use('/heroes', heroRoute);
    app.use('/comics', comicRoute);

    const server = app.listen(3007, () => {
        console.log(`Server en http://localhost:${server.address().port}`);
    });
}