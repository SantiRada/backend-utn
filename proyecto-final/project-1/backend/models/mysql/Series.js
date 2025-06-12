import mysql from 'mysql2/promise';

const config = {
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: '',
    database: 'project-series'
};

const connection = await mysql.createConnection(config);

export default class Series {
    static async GetSeries() {
        const [result] = await connection.query('SELECT * FROM series;');

        return result;
    }
    static async GetSerieForID (id) {
        const [result] = await connection.query('SELECT * FROM series WHERE id = ?;', [id]);

        return result;
    }
    static async GetSerieForFilter (filter) {
        let query = 'SELECT * FROM series WHERE ';

        Object.entries(filter).map(item => {
            if (item[1] != '') {
                if(item[0] != 'episodes'){
                    query += item[0] + ' LIKE \'%' + item[1] + '%\' and ';
                }else{
                    query += item[0] + ' = \'' + item[1] + '\' and ';
                }
            }
        });

        query = query.slice(0, -5);

        const [result] = await connection.query(query);

        return result;
    }
    static async CreateSerie (data) {
        const [result] = await connection.query('INSERT INTO series (title, description, genre, director, seasons, episodes, produced) VALUES (?, ?, ?, ?, ?, ?, ?);', [data.title, data.description, data.genre, data.director, data.seasons, data.episodes, data.produced]);

        return result;
    }
    static async UpdateSerie (data, id) {

    }
    static async UpdateSerieForFilter (data, filter) {

    }
    static async ReplaceSerie (data, id) {

    }
    static async DeleteSerie (id) {

    }
    static async DeleteSerieForFilter (filter) {

    }
}