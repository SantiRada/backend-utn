import { Router } from 'express';
import { ComicController } from '../controllers/comics.js';

export const CreateRouteComics = (comicModel) => {
    const comicRoute = Router();

    const comicController = new ComicController(comicModel);

    comicRoute.get('/', async (req, res) => {

        const response = await comicController.getComics(); // 
        
        res.status(response.code).json(response);
    });

    comicRoute.get('/:id', async (req, res) => {
        const { id } = req.params;

        const response = await comicController.getComicForID(id);
        
        res.status(response.code).json(response);
    });

    comicRoute.post('/', async (req, res) => {
        const body = req.body;

        const response = await comicController.createComic(body);
        
        res.status(response.code).json(response);
    });

    return comicRoute;
}