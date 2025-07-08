import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { User } from '../schemes/User.js';
import bcrypt from 'bcrypt';

dotenv.config();
const MONGODB = process.env.MONGODB;

mongoose.connect(MONGODB);

export default class UserModel {
    
    static async GetUsers () {
        const response = await User.find({});

        return response;
    }
    static async Login (mail, password) {
        const response = await User.find({mail});

        // Validar la contraseña
        const isValid = await bcrypt.compare(password, response[0].password);

        if (isValid) { return response; }

        return {};
    }
    static async Register (mail, name, password) {
        const isExist = await User.find({mail});

        console.log("Exist: ", isExist);

        if(isExist.Length > 0) { throw new Error("User has already exist"); }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new User({ mail, name, password: hashedPassword, type: 'admin' });

        const data = await newUser.save();

        return data;
    }
    static async CloseSession () {

    }
}