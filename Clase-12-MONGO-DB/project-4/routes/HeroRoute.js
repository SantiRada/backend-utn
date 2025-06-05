import mongoose from "mongoose";
import { Router } from "express";
import HeroController from '../controllers/HeroController.js';

export const heroRoute = Router();

export function HeroConstrutor (model) {

    const heroController = new HeroController(model);

    heroRoute.get('/', async (req, res) => {
        const hero = await heroController.getHeroes();

        // 1. Tenemos que crear un objeto nuevo
        // 2. Los documentos tienen que tener todos los datos nombrados
        // 3. Hay que crear un nuevo elemento siempre que lo quiera mostrar
        // const dataHero = {
        //     name: hero.name,
        //     power: hero.power,
        //     universe: hero.universe
        // }

        res.json(hero);
    });

    heroRoute.get('/test', async (req, res) => {
        const result = await heroController.testMongoose();

        res.json(result);
    });

    heroRoute.get('/:id', async (req, res, next) => {
        const { id } = req.params;

        // ObjectId = 16 caracteres /// 10 numeros //// 6 // Flecha Roja
        if(mongoose.Types.ObjectId.isValid(id)){
            const hero = await heroController.getHeroById(id);
        
            res.json(hero);
        }
        else { next(); }

    });

    heroRoute.get('/:name', async (req, res) => {
        const { name } = req.params;

        const hero = await heroController.getHeroByName(name);

        res.json(hero);
    });

    heroRoute.post('/', async (req, res) => {
        const newHero = await heroController.createHero(req.body);

        /// REVISIONES DE ERRORES

        res.json(newHero);
    });

    heroRoute.put('/:id', async (req, res) => {
        const { id } = req.params;

        const hero = await heroController.replaceHero(id, req.body);

        res.json(hero);
    });

    heroRoute.patch('/:id', async (req, res) => {
        const { id } = req.params;
        
        const hero = await heroController.updateHero(id, req.body);

        res.json(hero);
    });

    heroRoute.delete('/:id', async (req, res, next) => {
        const { id } = req.params;

        if(mongoose.Types.ObjectId.isValid(id)){
            const hero = await heroController.deleteOneHero(id);

            res.json(hero);
        }else{
            next();
        }
    });

    heroRoute.delete('/:name', async (req, res) => {
        const { name } = req.params;

        const hero = await heroController.deleteHero(name);

        res.json(hero);
    });

}