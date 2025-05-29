import { MongooseConnection } from '../models/mongodb.js';

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

    static async createHero (data) {
        const hero = await MongooseConnection.createHero(data);

        return hero;
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