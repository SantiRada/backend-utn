import mysql from 'mysql2/promise';

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

        return heroes;
    }

    static async GetHeroesForID (id) {
        // const [hero] = await connection.query(`SELECT * FROM heroes WHERE id = ${id}`); // SQL INJECT
        const [hero] = await connection.query('SELECT * FROM heroes WHERE id = ?;', [id]);
        

        return hero;
    }

    static async CreateHeroe (body) {
        const response = await connection.query('INSERT INTO heroes (name, age, company) VALUES (?, ?, ?);', [body.name, body.age, body.company]);

        return response;
    }

    static async UpdateHero (body) {

    }

    static async DeleteHero (id) {
        
    }
}