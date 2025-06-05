import { MovieMongoose } from '../models/mongodb/MovieModels.js';
import CreateResponse, { CreateError } from '../utils/response.js';

export default class MovieController {
    static async getMovies () {
        const movie = await MovieMongoose.getMovies();

        return movie;
    }

    static async testMongoose () {
        const result = await MovieMongoose.testMongoose();

        return result;
    }

    static async getMovieById (id) {
        const movie = await MovieMongoose.getMovieById(id);

        return movie;
    }

    static async getMovieByName (name) {
        const movie = await MovieMongoose.getMovieByName(name);

        return movie;
    }

    static async createMovie (body) {
        let data = [];
        let error = [];

        try{
            data = await MovieMongoose.createMovie(body);
        } catch(err) {
            error = CreateError(err);
        }

        return CreateResponse(200, data, error);
    }

    static async replaceMovie (id, data) {
        const movie = await MovieMongoose.replaceMovie(id, data);

        return movie;
    }

    static async updateMovie (id, data) {
        const movie = await MovieMongoose.updateMovie(id, data);

        return movie;
    }

    static async deleteOneMovie(id) {
        const movie = await MovieMongoose.deleteOneMovie(id);

        return movie;
    }

    static async deleteMovie (name) {
        const movie = await MovieMongoose.deleteMovie(name);

        return movie;
    }
}