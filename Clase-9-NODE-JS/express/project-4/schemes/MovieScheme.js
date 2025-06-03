import mongoose from "mongoose";

const movieScheme = new mongoose.Schema({
    title: String,
    year: Number,
    rating: Number,
    lang: String,
    director: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Director',
        required: true
    }
});

movieScheme.set('toJSON', {
        transform: (doc, returnedObject) => {
                delete returnedObject._id,
                delete returnedObject.__v
        }
});

export const Movies = new mongoose.model('Movies', movieScheme);

const directorScheme = new mongoose.Schema({
    name: String,
    age: Number
});

directorScheme.set('toJSON', {
        transform: (doc, returnedObject) => {
                delete returnedObject._id,
                delete returnedObject.__v
        }
});

export const Director = new mongoose.model('Director', directorScheme);