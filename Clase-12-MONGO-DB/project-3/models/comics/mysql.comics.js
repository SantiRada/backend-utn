import mysql from 'mysql2/promise';
import { CreateResponse } from '../../utils/Response.js';

const config = {
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: '',
    database: 'heroes'
};

const connection = await mysql.createConnection(config);

export default class Comics {

    static async GetComics () {
        const [comics] = await connection.query('SELECT * FROM comics;');

        return CreateResponse('GET', 'comics', comics);
    }

    static async GetComicForID (id) {
        const [comic] = await connection.query('SELECT * FROM comics WHERE id = ?;', [id]);
        
        return CreateResponse('GET', 'comics', comic);
    }

    static async CreateComic (body) {
        const response = await connection.query('INSERT INTO comics (titulo, editorial, anio_publicacion, personajes_principales) VALUES (?, ?, ?, ?);', [body.titulo, body.editorial, body.anio_publicacion, body.personajes_principales]);

        return CreateResponse('POST', 'comics', response);
    }

    static async UpdateComic (body) {

    }

    static async DeleteComic (id) {
        
    }
}
