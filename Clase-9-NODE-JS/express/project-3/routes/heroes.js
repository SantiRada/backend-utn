import { Router } from 'express';
import { getHeroes, getHeroesForID, createHeroe } from '../controllers/heroes.js';

export const heroRoute = Router();

heroRoute.get('/', async (req, res) => {

    const response = await getHeroes();
    
    res.status(200).send(response);
});

heroRoute.get('/:id', async (req, res) => {
    const { id } = req.params;

    const response = await getHeroesForID(id);
    
    res.status(response.code).json(response);
});

heroRoute.post('/', async (req, res) => {
    const body = req.body;

    const response = await createHeroe(body);
    
    res.status(response.code).json(response);
});