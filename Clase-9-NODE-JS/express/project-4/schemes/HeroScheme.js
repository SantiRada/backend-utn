import mongoose from "mongoose";

const Hero = new mongoose.Schema({
        name: String,
        power: String,
        universe: String
});


Hero.set('toJSON', {
        transform: (doc, returnedObject) => {
                returnedObject.id = doc._id,
                delete returnedObject._id,
                delete returnedObject.__v
        }
});

export const HeroModel = mongoose.model('characters', Hero);