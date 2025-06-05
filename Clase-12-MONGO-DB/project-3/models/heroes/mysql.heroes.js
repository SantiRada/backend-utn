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

export default class Heroes {

    static async GetHeroes () {
        const [heroes] = await connection.query('SELECT * FROM heroes;');

        return CreateResponse('GET', 'heroes', heroes);
    }

    static async GetHeroesForID (id) {
        const [hero] = await connection.query('SELECT * FROM heroes WHERE id = ?;', [id]);
        

        return CreateResponse('GET', 'heroes', hero);
    }

    static async CreateHeroe (body) {
        const response = await connection.query('INSERT INTO heroes (name, age, company) VALUES (?, ?, ?);', [body.name, body.age, body.company]);

        return CreateResponse('POST', 'heroes', response);
    }

    static async UpdateHero (body) {
        const response = await connection.query('UPDATE heroes SET name = ?, age = ?, company = ? WHERE id = ?;', [body.name, body.age, body.company, body.id]);

        return CreateResponse('PUT', 'heroes', response);
    }

    static async DeleteHero (id) {
        const response = await connection.query('DELETE FROM heroes WHERE id = ?;', [id]);

        return CreateResponse('DELETE', 'heroes', response);
    }
}