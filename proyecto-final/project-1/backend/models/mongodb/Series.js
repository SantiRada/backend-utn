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
    static async GetSerieForFilter (typeFilter, filter) {
        switch (typeFilter) {
            // product
        }
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