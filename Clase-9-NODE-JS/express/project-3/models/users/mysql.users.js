import mysql from 'mysql2/promise';

const config = {
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: '',
    database: 'heroes'
};

const connection = await mysql.createConnection(config);

export default class Users {

    static async VerifyUser (user) {
        const [data] = await connection.query('SELECT * FROM users WHERE username = ?;', [user]);

        return data;
    }
    static async RegisterUser (user, pass) {
        const [data] = await connection.query('INSERT INTO users (username, password, mail) VALUES (?, ?, ?);', [user, pass, '']);

        return data;
    }
}