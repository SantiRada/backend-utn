import { Movies } from '../../schemes/MovieScheme.js';
    
export class MovieMongoose {

    static async getMovies () {
        const movie = await Movies.find({});

        return movie;
    }

    static async testMongoose () {
        const result = await Movies.aggregate([
            { 
                $lookup: {
                    from: 'movies',
                    localField: 'universe',
                    foreignField: 'title',
                    as: 'Foreign_content'
                }
            }
        ]);

        return result;
    }

    static async getMovieById (id) {
        const movie = await Movies.findById(id); // ObjectId

        return movie;
    }

    static async getMovieByName (name) {
        const movie = await Movies.find({ name });

        return movie;
    }

    static async createMovie (data) {
        const movie = new Movies({
            name: data.name,
            power: data.power,
            universe: data.universe
        });

        const newMovie = await movie.save();

        return newMovie;
    }

    static async replaceMovie (id, data) {
        const movie = await Movies.findOneAndReplace({ _id: id }, data, { new: true });

        return movie;
    }

    static async updateMovie (id, data) {
        const movie = await Movies.findOneAndUpdate({ _id: id }, data, { new: true });

        return movie;
    }

    static async deleteOneMovie (id) {
        const movie = await Movies.deleteOne({ _id: id });

        return movie;
    }

    static async deleteMovie (name) {
        const movie = await Movies.deleteMany({ name });

        return movie;
    }
}