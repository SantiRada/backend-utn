import express from 'express';
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => { res.send("Hola mundo"); });

app.get('/users', (req, res) => {
    res.json([
        {
            id: 2,
            title: "example"
        }
    ]);
});

app.post('/users', (req, res) => {
    const { title, description } = req.body;

    if(!title || !description){
        return res.json({ message: 'Error data' });
    }

    res.send("Hello World!");
});

const server = app.listen(3030, () => {
    console.log(`Servidor encendido en http://localhost:${server.address().port}`);
});

export function sum (a, b) {
    if (a == null || b == null) {
        throw new Error('No se enviaron parametros!');
    }

    if(typeof a !== 'number' || typeof b !== 'number') {
        throw new Error('Los parametros deben ser numéricos');
    }
    
    return a + b;
}

export default app;