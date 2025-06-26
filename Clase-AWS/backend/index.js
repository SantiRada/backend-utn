import express from 'express';
import dotenv from 'dotenv';
import multer from 'multer';
import cors from 'cors';
import fs from 'fs';
import e from 'express';

dotenv.config();

const app = express();

// MIDDLEWARE
app.use(express.json());
app.use(cors());
app.use('/upload', express.static('upload'));

// CONFIG DE MULTER
const uploadDir = './upload';
if(!fs.existsSync(uploadDir)) { fs.mkdir(uploadDir); }
//////////////////////////////
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const isImage = file.mimetype.startsWith('image');

        if(!isImage) { cb(new Error('Tipo de archivo invalido')); }
        else { cb(null, uploadDir); }
    },
    filename: (req, file, cb) => {
        cb(null, (Date.now() + '-' + file.originalname));
    }
});
const loadStorage = multer({ storage });
//////////////////////////////

// ENDPOINTS
app.get('/', (req, res) => { res.json({ message: 'Connected!' }); });
app.post('/upload', loadStorage.single('file'), (req, res) => {
    if(!req.file) return res.status(404).json({ message: 'no se pudo enviar el archivo' });
    res.json({
        url: `http://localhost:${process.env.PORT}/upload/${req.file.filename}`
    });
});

const server = app.listen(process.env.PORT, () => {
    console.log(`Servido en http://localhost:${server.address().port}`);
});