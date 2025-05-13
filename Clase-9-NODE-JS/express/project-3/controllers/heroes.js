import Heroes from '../models/mysql.heroes.js';
import { validateArrayHero, validateObjectHero } from '../schemes/heroes.js';

export async function getHeroes () {
    // VALIDACION DE TIPOS ????

    const response = await Heroes.GetHeroes();

    // VALIDACIONES DE TIPOS

    return response;
}

export async function getHeroesForID (id) {
    // VALIDACION DE TIPOS ????

    const data = await Heroes.GetHeroesForID(id);
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

export async function createHeroe (body) {
    // VALIDACION INICIAL
    // const dataBody = validateObjectHero({
    //     name: body.name,
    //     age: body.age,
    //     company: body.company
    // });

    // return dataBody;

    // ------ ESPACIO DE CORTE ------

    const data = await Heroes.CreateHeroe(body);
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