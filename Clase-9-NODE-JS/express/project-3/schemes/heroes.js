import { z } from 'zod';

const typeHero = z.object({
    // id: z.number().max(100).positive(),
    name: z.string({
        message: "Se espera un string"
    }),
    age: z.number(),
    company: z.string()
});

export function validateArrayHero(data) {
    return typeHero.safeParse(data[0]);
}

export function validateObjectHero(data){
    return typeHero.safeParse(data);
}