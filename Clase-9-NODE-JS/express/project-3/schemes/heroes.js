import { z } from 'zod';

const typeHero = z.object({
    id: z.number().max(100).positive(),
    name: z.string({
        message: "Se espera un string"
    }),
    age: z.number()
});

export function validateHero(data){
    return typeHero.safeParse(data);
}