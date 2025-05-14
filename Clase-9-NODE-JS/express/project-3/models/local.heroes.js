import { readJSON } from '../utils/readJSON.js';

const heroes = readJSON('../json/heroes.json');

export default class Heroes {

    static GetHeroes () {
        return heroes;
    }

    static GetHeroesForID (id) {

        const hero = heroes.find(h => h.id == id);

        return hero;
    }
}