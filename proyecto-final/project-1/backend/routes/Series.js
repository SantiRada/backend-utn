import { Router } from "express";
import { Series } from '../controllers/Series.js';

export const routeForSeries = Router();

export function SeriesRoute (model) {

    const seriesController = new Series(model);

    routeForSeries.get('/', async (req, res) => {
        const result = await seriesController.GetSeries();

        res.json(result);
    });

    routeForSeries.get('/filter', async (req, res) => {
        const filters = req.query;

        const data = await seriesController.GetSerieForFilter(filters);

        res.json(data);
    });

    routeForSeries.post('/', async (req, res) => {
        const data = await seriesController.CreateSerie(req.body);

        res.json(data);
    });
}

