import express from 'express';
import { heroRoute, HeroConstrutor } from './routes/HeroRoute.js';
import { movieRoute } from './routes/MovieRoute.js';
import { directorRoute } from './routes/DirectorRoute.js';

const app = express();

export function CreateApp (model) {
    app.use(express.json());

    HeroConstrutor(model);

    app.get('/', (req, res) => { res.send('Hello, World!'); });

    app.use('/heroes', heroRoute);
    app.use('/movies', movieRoute);
    app.use('/director', directorRoute);

    app.use('/', (req, res) => {
        res.status(404).send('404 Not Found.');
    });

    const server = app.listen(3008, () => {
        console.log(`Server is running on http://localhost:${server.address().port}`);
    });
}