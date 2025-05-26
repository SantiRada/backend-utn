import { HashData, CompareData } from '../utils/hash.js';
import { Resend } from 'resend';
import dotenv from 'dotenv';

dotenv.config();

const resendKey = new Resend(process.env.RESENDKEY);

export class UserController {
    constructor (userModel) {
        this.userModel = userModel;
    }

    login = async (user, password) => {
        const response = await this.userModel.VerifyUser(user);

        const verify = await CompareData(password, response[0].password);

        return verify;
    }

    register = async (user, password) => {
        const passwordHash = await HashData(password);

        const response = await this.userModel.RegisterUser(user, passwordHash);

        return response;
    }

    sendMail = async (email, subject, message) => {
        // Falta cargar un dominio valido
        const data = await resendKey.emails.send({
            from: 'santynrada@resend.dev',
            to: [email],
            subject,
            html: '<h1>Hola 2</h1><p>' + message + '</p>'
        });

        return data;
    };
}