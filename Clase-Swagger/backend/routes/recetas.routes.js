import express from 'express';
import fs from 'fs';
import { recetaSchema } from '../schema/receta.schema.js';

const router = express.Router();
const DB_PATH = './db/recetas.json';

const leerRecetas = () => JSON.parse(fs.readFileSync(DB_PATH, 'utf-8'));
const guardarRecetas = (data) => fs.writeFileSync(DB_PATH, JSON.stringify(data, null, 2));

// GET todas las recetas
router.get('/', (req, res) => {
  res.json(leerRecetas());
});

// POST nueva receta
router.post('/', (req, res) => {
  try {
    const recetas = leerRecetas();
    const nueva = recetaSchema.parse(req.body);
    if (recetas.some(r => r.id === nueva.id)) {
      return res.status(400).json({ error: 'ID duplicado' });
    }
    recetas.push(nueva);
    guardarRecetas(recetas);
    res.status(201).json(nueva);
  } catch (e) {
    res.status(400).json({ error: e.errors });
  }
});

// PUT actualizar receta
router.put('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  try {
    const recetas = leerRecetas();
    const index = recetas.findIndex(r => r.id === id);
    if (index === -1) return res.status(404).json({ error: 'No encontrada' });
    const actualizada = recetaSchema.parse({ ...req.body, id });
    recetas[index] = actualizada;
    guardarRecetas(recetas);
    res.json(actualizada);
  } catch (e) {
    res.status(400).json({ error: e.errors });
  }
});

// DELETE receta
router.delete('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const recetas = leerRecetas();
  const nuevas = recetas.filter(r => r.id !== id);
  if (recetas.length === nuevas.length) return res.status(404).json({ error: 'No encontrada' });
  guardarRecetas(nuevas);
  res.json({ message: 'Eliminada' });
});

export default router;
