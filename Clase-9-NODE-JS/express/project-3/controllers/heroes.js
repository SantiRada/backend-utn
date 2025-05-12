import Heroes from '../models/heroes.js';
import { validateHero } from '../schemes/heroes.js';

export function getHeroes () {
    // VALIDACION DE TIPOS ????

    const response = Heroes.GetHeroes();

    // VALIDACIONES DE TIPOS

    return response;
}

export function getHeroesForID (id) {
    // VALIDACION DE TIPOS ????

    const data = Heroes.GetHeroesForID(id);
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
        let zodResponse = validateHero(data);

        response = {
            status: 'ok',
            code: 200,
            data: zodResponse,
            errors: []
        };
    }

    return response;
}