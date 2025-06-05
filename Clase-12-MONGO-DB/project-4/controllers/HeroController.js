import CreateResponse, { CreateError } from '../utils/response.js';

export default class HeroController {
    constructor (model) {
        this.model = model;
    }
    
    async getHeroes () {
        const hero = await this.model.getHeroes();

        return hero;
    }

    async testMongoose () {
        const result = await this.model.testMongoose();

        return result;
    }

    async getHeroById (id) {
        const hero = await this.model.getHeroById(id);

        return hero;
    }

    async getHeroByName (name) {
        const hero = await this.model.getHeroByName(name);

        return hero;
    }

    async createHero (body) {
        let data = [];
        let error = [];

        try{
            data = await this.model.createHero(body);
        } catch(err) {
            error = CreateError(err);
        }

        return CreateResponse(200, data, error);
    }

    async replaceHero (id, data) {
        const hero = await this.model.replaceHero(id, data);

        return hero;
    }

    async updateHero (id, data) {
        const hero = await this.model.updateHero(id, data);

        return hero;
    }

    async deleteOneHero(id) {
        const hero = await this.model.deleteOneHero(id);

        return hero;
    }

    async deleteHero (name) {
        const hero = await this.model.deleteHero(name);

        return hero;
    }
}