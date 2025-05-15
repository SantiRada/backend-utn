export class HeroController {
    constructor (heroModel) {
        this.heroModel = heroModel;
    }

    getHeroes = async () => {
        const response = await this.heroModel.GetHeroes();

        return response;
    }

    getHeroesForID = async (id) => {
        const data = await this.heroModel.GetHeroesForID(id);

        return data;
    }

    createHeroe = async (body) => {
        const data = await this.heroModel.CreateHeroe(body);

        return data;
    }

    updateHero = async (body) => {
        const data = await this.heroModel.UpdateHero(body);
        
        return data;
    }

    deleteHero = async (id) => {
        const data = await this.heroModel.DeleteHero(id);
        
        return data;
    }
}