import express from 'express';
import dotenv from 'dotenv';
import multer from 'multer';
import cors from 'cors';
import { s3 } from './s3Client.js';
import { PutObjectCommand } from '@aws-sdk/client-s3';

dotenv.config();

const app = express();

// MIDDLEWARE
app.use(express.json());
app.use(cors());

// CONFIG DE MULTER
const storage = multer.memoryStorage();
const loadStorage = multer({ storage });

// ENDPOINTS
app.get('/', (req, res) => { res.json({ message: 'Connected!' }); });
app.post('/upload', loadStorage.single('file'), async (req, res) => {
    if(!req.file) return res.status(404).json({ message: 'no se pudo enviar el archivo' });

    const file = req.file;
    const filename = Date.now() + '-' + file.originalname;

    if(file.mimetype.includes('jpg')){
        return res.status(403).json({ message: 'Deben subirse imágenes optimizadas' });
    }

    const data = new PutObjectCommand({
        Bucket: process.env.BUCKET_NAME,
        Key: filename,
        Body: file.buffer,
        ContentType: file.mimetype
    });

    try {
        await s3.send(data);
        const url = `https://${process.env.BUCKET_NAME}.s3.${process.env.BUCKET_REGION}.amazonaws.com/${filename}`;
        res.json({url: url});
    } catch (err) {
        res.status(500).json({ message: 'error: ' + err });
    }
});

const server = app.listen(process.env.PORT, () => {
    console.log(`Servido en http://localhost:${server.address().port}`);
});