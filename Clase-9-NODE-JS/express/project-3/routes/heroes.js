import { Router } from 'express';
import { getHeroes, getHeroesForID } from '../controllers/heroes.js';

export const heroRoute = Router();

heroRoute.get('/', (req, res) => {

    const response = getHeroes();
    
    res.status(200).json(response);
});

heroRoute.get('/:id', (req, res) => {
    const { id } = req.params;

    const response = getHeroesForID(id);
    
    res.status(response.code).json(response);
});






/// MODELO /// GetHeroes() MYSQL

///////

/// CONTROLADOR /// GetHeroes()

///////

/// VISTA -> HTML-css-js /// REACT /// VUE // SVELTE // ANGULAR -> http://localhost:3007/heroes