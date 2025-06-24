import { Router } from "express";
import { Series } from '../controllers/Series.js';
import mongoose from "mongoose";

export const routeForSeries = Router();

export function SeriesRoute (model) {

    const seriesController = new Series(model);

    routeForSeries.get('/', async (req, res) => {
        const result = await seriesController.GetSeries();

        res.json(result);
    });

    routeForSeries.get('/filter', async (req, res) => {
        const filters = req.body;
        // req.params // variable.split(' ').join('%20');

        const data = await seriesController.GetSerieForFilter(filters);

        res.json(data);
    });

    routeForSeries.post('/', async (req, res) => {
        const data = await seriesController.CreateSerie(req.body);

        res.json(data);
    });

    process.on('SIGINT', async () => {
        await mongoose.disconnect();
        // await mysql.closeConnection()
        console.log('MongoDB connection closed');
        process.exit(0);
    });
}