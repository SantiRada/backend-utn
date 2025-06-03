import mongoose from "mongoose";
import dotenv from 'dotenv';
import { HeroModel } from '../schemes/HeroScheme.js';

dotenv.config();

const connectionMongoDB = process.env.MONGODB_URI;

mongoose.connect(connectionMongoDB)
    .then(() => {
        console.log('Connected to MongoDB');
    }).catch(err => {
        console.error('Error connecting to MongoDB:', err);
    })
    
export class MongooseConnection {
    static async getHeroes () {

        const hero = await HeroModel.find({});

        return hero;
    }

    static async getHeroById (id) {
        const hero = await HeroModel.findById(id); // ObjectId

        return hero;
    }

    static async getHeroByName (name) {
        const hero = await HeroModel.find({ name });

        return hero;
    }

    static async createHero (data) {
        const hero = new HeroModel({
            name: data.name,
            power: data.power,
            universe: data.universe
        });

        const newHero = await hero.save();

        return newHero;
    }

    static async replaceHero (id, data) {
        const hero = await HeroModel.findOneAndReplace({ _id: id }, data, { new: true });

        return hero;
    }

    static async updateHero (id, data) {
        const hero = await HeroModel.findOneAndUpdate({ _id: id }, data, { new: true });

        return hero;
    }

    static async deleteOneHero (id) {
        const hero = await HeroModel.deleteOne({ _id: id });

        return hero;
    }

    static async deleteHero (name) {
        const hero = await HeroModel.deleteMany({ name });

        return hero;
    }
}