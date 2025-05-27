import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const connectionMongoDB = process.env.MONGODB_URI;

// MANEJO DE PROMESAS ASYNC/AWAIT
mongoose.connect(connectionMongoDB)
    .then(() => {
        console.log('Connected to MongoDB');
    }).catch(err => {
        console.error('Error connecting to MongoDB:', err);
    })

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.get('/heroes', async (req, res) => {

    const hero = await mongoose.connection.db.collection('characters').find({}).toArray();
        // {$regex: 'IronMan' }, $options: 'i' }

        // .then(data => {
        //     res.json(data);
        // }).catch(err => {
        //     res.status(500).send('Internal Server Error');
        // })

        res.json(hero);
});

app.get('/heroes/:name', async (req, res) => {
    const { name } = req.params;

    const hero = await mongoose.connection.db.collection('characters').find({ name: { $regex: name, $options: 'i' } }).toArray();

    res.json(hero);
});

app.post('/heroes', async (req, res) => {
    const { name, power, universe } = req.body;

    const Hero = new mongoose.Schema({
        name: String,
        power: String,
        universe: String
    });

    const HeroModel = mongoose.model('characters', Hero);

    const existingHero = await mongoose.connection.db.collection('characters').find({ name: name }).toArray();

    if(existingHero.length > 0) return res.status(400).json({ existingHero });

    const newHero = new HeroModel({ name, power, universe });

    const createNewHero = await newHero.save();

    res.json(createNewHero);
});

const server = app.listen(3008, () => {
    console.log('Server is running on http://localhost:3008');
});