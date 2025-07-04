import express from 'express';
import cors from 'cors';

const app = express();

const PORT = process.env.PORT || 3010;

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.json({ message: 'Hello World!' });
});

app.post('/login', (req, res) => {
    const { mail, password } = req.body;

    res.json({
        success: true,
        data: {
            id: 1,
            name: 'Example name',
            mail,
            type: 'admin'
        }
    });
});

app.listen(PORT, () => {
    console.log(`http://localhost${PORT}`)
});