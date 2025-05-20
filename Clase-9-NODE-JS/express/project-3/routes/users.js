import { Router } from 'express';
import { UserController } from '../controllers/users.js';

export const CreateRouteUsers = (userModel) => {
    const userRoute = Router();

    const userController = new UserController(userModel);

    userRoute.get('/', (req, res) => {
        res.send('users');
    });

    userRoute.options('/login', (req, res) => {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, OPTIONS, DELETE');
        res.send();
    });

    userRoute.get('/login', (req, res) => { res.send('login'); });

    userRoute.post('/login', async (req, res) => {
        res.header('Access-Control-Allow-Origin', '*');
        const { user, password } = req.body;

        // 1. De Tipado
        if(typeof user !== 'string' || typeof password !== 'string') {
            res.status(400).json({ code: 400, message: 'El usuario o la contraseña no son un string' });
            return;
        }
        // 2. Length: Min / Max
        if(user.length < 5 || user.length > 15) {
            res.status(400).json({ code: 400, message: 'El usuario no tiene la longitud correcta' });
            return;
        }

        // 3. Existente
        const verifyUser = await userController.login(user, password) ?? "El usuario no existe";

        res.render('login.ejs', {
            username: "Santiago"
        });
    });
    
    userRoute.post('/register', async (req, res) => {
        
        const { user, password } = req.body;
    
        const verifyUser = await userController.register(user, password);

        res.json({message: 'Usuario registrado', data: verifyUser });
    });

    return userRoute;
}