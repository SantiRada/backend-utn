import { Router } from 'express';
import { UserController } from '../controllers/users.js';

export const CreateRouteUsers = (userModel) => {
    const userRoute = Router();

    const userController = new UserController(userModel);

    userRoute.get('/', (req, res) => {
        res.send('users');
    });

    userRoute.get('/user', (req, res) => {
        res.render('index');
    });

    userRoute.options('/login', (req, res) => {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, OPTIONS, DELETE');
        res.send();
    });

    userRoute.post('/send-mail', async (req, res) => {
        const { email, subject, message } = req.body;

        const data = await userController.sendMail(email, subject, message);

        res.json({ message: 'Correo enviado', data });
    });

    userRoute.get('/login', (req, res) => { res.send('login'); });

    userRoute.post('/login', async (req, res) => {
        const { user, password } = req.body;

        if(typeof user !== 'string' || typeof password !== 'string') {
            res.status(400).json({ code: 400, message: 'El usuario o la contraseña no son un string' });
            return;
        }
        if(user.length < 5 || user.length > 15) {
            res.status(400).json({ code: 400, message: 'El usuario no tiene la longitud correcta' });
            return;
        }

        const verifyUser = await userController.login(user, password) ?? "El usuario no existe";

        res.json({ message: 'Usuario logueado', data: verifyUser });
    });
    
    userRoute.post('/register', async (req, res) => {
        
        const { user, password } = req.body;
    
        const verifyUser = await userController.register(user, password);

        res.json({message: 'Usuario registrado', data: verifyUser });
    });

    return userRoute;
}