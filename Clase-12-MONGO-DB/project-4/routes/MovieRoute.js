import { Router } from "express";
import { Movies } from '../schemes/MovieScheme.js';
import MovieController from '../controllers/MoviesController.js';

export const movieRoute = Router();

movieRoute.get('/', async (req, res) => {
    const response = await Movies.find({}).populate('director', 'name age');

    res.json(response);
});

movieRoute.post('/', async (req, res) => {
    const data = new Movies({
        title: req.body.title,
        year: req.body.year,
        rating: req.body.rating,
        lang: req.body.lang,
        director: req.body.director
    });

    const newMovie = await data.save();

    res.json(newMovie);
});

movieRoute.patch('/:id', async (req, res) => {
    const { id } = req.params;
    
    const hero = await MovieController.updateMovie(id, req.body);

    res.json(hero);
});