import { z } from 'zod';

const typeHero = z.object({
    id: z.number().max(100).positive(),
    nombre: z.string({
        message: "Se espera un string"
    }),
    edad: z.number(),
    poderes: z.array(z.string()),
    compania: z.string()
});

export function validateHero(data){
    return typeHero.safeParse(data);
}