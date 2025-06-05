import mongoose from "mongoose";
import dotenv from 'dotenv';
import { HeroModel } from '../../schemes/HeroScheme.js';

dotenv.config();

// "SELECT * FROM heroes WHERE universe LIKE %'marvel' ORDER BY universe DESC"

const connectionMongoDB = process.env.MONGODB_URI;

mongoose.connect(connectionMongoDB)
    .then(() => {
        console.log('Connected to MongoDB');
    }).catch(err => {
        console.error('Error connecting to MongoDB:', err);
    })
    
export class HeroMongoose {
    static async getHeroes () {
        const hero = await HeroModel.find({});

        return hero;
    }

    static async testMongoose () {

        // const [marvel, dc] = await Promise.all([
        //     HeroModel.aggregate([
        //         { $match: { universe: 'marvel' } },
        //         { $count: 'marvel_total' }
        //     ]),
        //     HeroModel.aggregate([
        //         { $match: { universe: 'dc' } },
        //         { $count: 'dc_total' }
        //     ])
        // ]);

        // const result = {
        //     marvel: Object.values(marvel[0]),
        //     dc: Object.values(dc[0])
        // };

        // ['marvel']
        // ELEMENTO.marvel
        // Object.values(ELEMENTO) /// [0] = 2 // [1] = 3

        // const result = await HeroModel.aggregate([
        //     {
        //         $group: {
        //             _id: { $toLower: '$universe' },
        //             total: { $sum: 1 }
        //         }
        //     },
        //     {
        //         $project: {
        //             universe: '$_id',
        //             total: 1,
        //             _id: 0
        //         }
        //     }
        // ]);

        //////////////////////////////////// POS BREAK

        // const result = await HeroModel.aggregate([
        //     { $match: { universe: 'Marvel' } },
        //     { $sort: { name: -1 } },
        //     { $skip: 2 },
        //     { $limit: 4 },
        //     {
        //         $project: {
        //             _id: 0,
        //             __v: 0
        //         }
        //     }
        // ]);

        // const result = await HeroModel.aggregate([
        //     { 
        //         $lookup: {
        //             from: 'movies',         /// EN QUE COLLECCIÓN HAGO LA BÚSQUEDA
        //             localField: 'name',     /// QUE PARÁMETRO TOMO EN CUENTA PARA BUSCAR
        //             foreignField: 'title',  /// EN QUE LUGAR DE LA COLECCIÓN DE DESTINO LO BUSCO
        //             as: 'list_movies'   /// COMO SE LLAMA EL RESULTADO
        //         }
        //     },
        //     {
        //         $project: {
        //             _id: 0,
        //             __v: 0,
        //             createdAt: 0,
        //             updatedAt: 0
        //         }
        //     }
        // ]);

        // ENCONTRAR AL DIRECTOR DE LAS PELÍCULAS QUE TENGAN UNA REFERENCIA

        const result = await HeroModel.aggregate([
            {
                $project: {
                    __v: 0,
                    createdAt: 0,
                    updatedAt: 0
                }
            },
            { $unwind: '$power' },
            {
                $group: {
                    _id: '$power',
                    heroes: { $push: '$_id' },
                    total: { $sum: 1 }
                }
            }
        ]);

        return result;
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