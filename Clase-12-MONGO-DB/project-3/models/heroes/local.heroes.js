import { readJSON } from '../../utils/readJSON.js';
import { CreateResponse } from '../../utils/Response.js';

const heroes = readJSON('../json/heroes.json');

export default class Heroes {

    static GetHeroes () {
        return CreateResponse('GET', 'heroes', heroes);
    }

    static GetHeroesForID (id) {

        const hero = heroes.find(h => h.id == id);

        return CreateResponse('GET', 'heroes', hero);
    }
}