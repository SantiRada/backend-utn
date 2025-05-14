import { validateArrayHero } from '../schemes/heroes.js';

export class HeroController {
    constructor (heroModel) {
        this.heroModel = heroModel;
    }

    // static async getHeroes () { }

    getHeroes = async () => { // this // no lo tiene
        const response = await this.heroModel.GetHeroes();

        return response;
    }

    getHeroesForID = async (id) => {
        // VALIDACION DE TIPOS ????

        const data = await this.heroModel.GetHeroesForID(id);
        let response;

        // VALIDACIONES DE TIPOS
        if(data == null){
            response = {
                status: 'error',
                code: 404,
                data: {},
                errors: [ "No se encontró el heroe" ]
            };
        }else{
            let zodResponse = validateArrayHero(data);

            response = {
                status: 'ok',
                code: 200,
                data: zodResponse,
                errors: []
            };
        }

        return response;
    }

    createHeroe = async (body) => {
        const data = await this.heroModel.CreateHeroe(body);
        let response;

        if(data == null){
            response = {
                status: 'error',
                code: 501,
                data: body,
                errors: [ "No se pudo crear el heroe" ]
            };
        }else{
            response = {
                status: 'ok',
                code: 201,
                data: body,
                errors: []
            };
        }

        return response;
    }
}