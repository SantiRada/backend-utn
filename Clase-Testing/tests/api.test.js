import request from "supertest";
import app from '../index.js';

describe('GET /users', () => {

    test('should response with a Array', async () => {
        const response = await request(app).get('/users').send();
        expect(response.body).toBeInstanceOf(Array);
    });

    test('should response with a 200 status code', async () => {
        const response = await request(app).get('/users').send();
        expect(response.status).toBe(200);
    });

    test('should response with a Array with objects', async () => {
        const response = await request(app).get('/users').send();

        for(let i = 0; i < response.body.length; i++){
            expect(response.body[i]).toBeInstanceOf(Object);
        }
    });

    test('should response with a ID for each objects', async () => {
        const response = await request(app).get('/users').send();
        
        for (let i = 0; i < response.body.length; i++) {
            expect(response.body[i].id).toBeDefined();
        }
    });

    test('should response with a application/json in headers', async () => {
        const response = await request(app).get('/users').send();
        expect(response.headers['content-type']).toEqual(expect.stringContaining("json"));
    });
});

describe('POST /users', () => {

    const newUser = {
        description: 'example user'
    };

    test('should received two parameters', async () => {

        const fields = [
            {
                title: 'example user',
            },
            {
                description: 'example description',
            },
            {}
        ]

        for(let i = 0; i < fields.length; i++){
            const response = await request(app).post('/users').send(fields[i]);
            expect(response.body.message).toBe("Error data");
        }
    })
});