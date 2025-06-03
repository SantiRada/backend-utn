import { MongooseConnection } from '../models/mongodb.js';
import CreateResponse, { CreateError } from '../utils/response.js';

export default class HeroController {
    static async getHeroes () {
        const hero = await MongooseConnection.getHeroes();

        return hero;
    }

    static async getHeroById (id) {
        const hero = await MongooseConnection.getHeroById(id);

        return hero;
    }

    static async getHeroByName (name) {
        const hero = await MongooseConnection.getHeroByName(name);

        return hero;
    }

    static async createHero (body) {
        let data = [];
        let error = [];

        try{
            data = await MongooseConnection.createHero(body);
        } catch(err) {
            error = CreateError(err);
        }

        return CreateResponse(200, data, error);
    }

    static async replaceHero (id, data) {
        const hero = await MongooseConnection.replaceHero(id, data);

        return hero;
    }

    static async updateHero (id, data) {
        const hero = await MongooseConnection.updateHero(id, data);

        return hero;
    }

    static async deleteOneHero(id) {
        const hero = await MongooseConnection.deleteOneHero(id);

        return hero;
    }

    static async deleteHero (name) {
        const hero = await MongooseConnection.deleteHero(name);

        return hero;
    }
}