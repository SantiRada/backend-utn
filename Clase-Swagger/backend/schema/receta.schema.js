import { z } from 'zod';

export const recetaSchema = z.object({
  id: z.number().int(),
  nombre: z.string().min(1),
  ingredientes: z.array(z.string().min(1)),
  instrucciones: z.string().min(1)
});
