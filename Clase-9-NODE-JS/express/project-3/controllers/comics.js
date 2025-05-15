import { CreateResponse } from '../utils/Response.js';

export class ComicController {
    constructor (comicModel) {
        this.comicModel = comicModel;
    }

    getComics = async () => {
        const data = await this.comicModel.GetComics();

        return data;
    }

    getComicForID = async (id) => {
        const data = await this.comicModel.GetComicForID(id);

        return data;
    }

    createComic = async (body) => {
        const data = await this.comicModel.CreateComic(body);

        return data;
    }
}