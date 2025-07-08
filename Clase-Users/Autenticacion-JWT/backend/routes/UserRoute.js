import express from "express";
import UserController from '../controller/User.Controller.js';
import jwt from 'jsonwebtoken';

const UserRoute = express.Router();

UserRoute.get('/', async (req, res) => {
    const response = await UserController.GetUsers();

    res.json(response);
});

UserRoute.post('/login', async (req, res) => {
    const { mail, password } = req.body;

    const response = await UserController.Login(mail, password);

    if(response){
        const user = response.data[0];
    
        const token = jwt.sign({ id: user._id, name: user.name, mail: user.mail, type: user.type }, process.env.SECREY_KEY_JWT, { expiresIn: '2h' });
    
        res.cookie('user_token', token, {
            httpOnly: true, // SI SE PUEDE ACCEDER SOLO DESDE ESTE DOMINIO (true) O DESDE CUALQUIERA (false)
            secure: false, // EXCLUSIVO CON HTTPS (true)
            maxAge: 1000 * 60 * 60 * 2 // El tiempo de expiración de la cookie desde milisegundos a horas
        });
    
        res.json({ success: true, data: user.name });
    } else {
        res.json({success: false, data: []});
    }

});

UserRoute.post('/register', async (req, res) => {
    const { mail, name, password } = req.body;

    const response = await UserController.Register(mail, name, password);
    
    const user = response.data[0];

    const token = jwt.sign({ id: user._id, name: user.name, mail: user.mail, type: user.type }, process.env.SECREY_KEY_JWT, { expiresIn: '2h' });
    
    res.cookie('user_token', token, {
        httpOnly: true,
        secure: false,
        maxAge: 1000 * 60 * 60 * 2
    });

    res.json({ user: user.name });
});

UserRoute.get('/auth', async (req, res) => {
    const token = req.cookies.user_token;

    if (!token) {
        res.status(401).json({ error: 'Unauthorized'});
        return;
    }

    try {
        const decoded = jwt.verify(token, process.env.SECREY_KEY_JWT);
        res.json({ success: true, data: decoded });
    } catch (err) {
        res.status(401).json({ error: 'Incorrect Secrey Key' });
    }
});

UserRoute.post('/closeSession', (req, res) => {
    res.clearCookie('user_token');

    res.json({message: 'Close Session!'});
});

export default UserRoute;