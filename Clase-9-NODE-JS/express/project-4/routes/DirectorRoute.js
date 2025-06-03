import { Router } from "express";
import { Director } from '../schemes/MovieScheme.js';

export const directorRoute = Router();

directorRoute.get('/', async (req, res) => {
    const response = await Director.find({});

    res.json(response);
});

directorRoute.post('/', async (req, res) => {
    const data = new Director({
        name: req.body.name,
        age: req.body.age
    });

    const newDirector = await data.save();

    res.json(newDirector);
});