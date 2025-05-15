import { Router } from 'express';
import { HeroController } from '../controllers/heroes.js';

export const CreateRouteHeroes = (heroModel) => {
    const heroRoute = Router();

    const heroController = new HeroController(heroModel);

    heroRoute.get('/', async (req, res) => {

        const response = await heroController.getHeroes(); // 
        
        res.status(response.code).json(response);
    });

    heroRoute.get('/:id', async (req, res) => {
        const { id } = req.params;

        const response = await heroController.getHeroesForID(id);
        
        res.status(response.code).json(response);
    });

    heroRoute.post('/', async (req, res) => {
        const body = req.body;

        const response = await heroController.createHeroe(body);
        
        res.status(response.code).json(response);
    });

    heroRoute.put('/', async (req, res) => {
        const body = req.body;

        const response = await heroController.updateHero(body);
        
        res.status(response.code).json(response);
    });

    heroRoute.delete('/:id', async (req, res) => {
        const { id } = req.params;

        const response = await heroController.deleteHero(id);
        
        res.status(response.code).json(response);
    });

    return heroRoute;
}