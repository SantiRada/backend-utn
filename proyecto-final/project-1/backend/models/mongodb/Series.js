import mongoose from "mongoose";
import { SerieModel } from '../../schemes/Series.js';

const connectionMongoDB = process.env.MONGODB;

mongoose.connect(connectionMongoDB)
    .then(() => {
        console.log('Connected to MongoDB');
    }).catch(err => {
        console.error('Error connecting to MongoDB:', err);
    })

export default class Series {
    static async GetSeries() {
        const response = await SerieModel.find({});

        return response;
    }
    static async GetSerieForID (id) {

    }
    static async GetSerieForFilter (filter) {
        const query = {};

        if (filter.title) {
            query.title = { $regex: filter.title, $options: 'i' };
        }

        if (filter.seasons) {
            query.seasons = parseInt(filter.seasons);
        }

        if (filter.episodes) {
            query.episodes = parseInt(filter.episodes);
        }

        let order = filter.orderBy ? 1 : -1;
        
        // const result = await SerieModel.find({
        //     title: { $regex: filter.title, $options: 'i' },
        //     seasons: parseInt(filter.seasons),
        //     episodes: parseInt(filter.episodes)
        // });

        const result = await SerieModel.find(query).sort({ title: order });
        
        return result;

    }
    static async CreateSerie (data) {
        const newSerie = new SerieModel(data);

        const response = await newSerie.save();

        return response;
    }
    static async UpdateSerie (data, id) {

    }
    static async UpdateSerieForFilter (data, filter) {

    }
    static async ReplaceSerie (data, id) {

    }
    static async DeleteSerie (id) {

    }
    static async DeleteSerieForFilter (filter) {

    }
}