import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import recetasRoutes from './routes/recetas.routes.js';

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/recetas', recetasRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
