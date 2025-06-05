import { readJSON } from '../../utils/readJSON.js';
import { CreateResponse } from '../../utils/Response.js';

const comics = readJSON('../json/comics.json');

export default class Comics {

    static GetComics () {
        return CreateResponse('GET', 'comics', comics);
    }

    static GetComicForID (id) {

        const comic = comics.find(c => c.id == id);

        return CreateResponse('GET', 'comics', comic);
    }
}