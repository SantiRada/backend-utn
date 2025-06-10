import mongoose from "mongoose";

const serieScheme = new mongoose.Schema(
    {
        title: String,
        description: String,
        genre: String,
        director: String,
        seasons: String,
        episodes: String,
        produced: String
    },
    {
        versionKey: false,
        timestamps: true
    }
);

serieScheme.set('toJSON', {
        transform: (doc, returnedObject) => {
                returnedObject.id = doc._id,
                delete returnedObject._id,
                delete returnedObject.__v
        }
});

export const SerieModel = new mongoose.model('series', serieScheme);