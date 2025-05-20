import { HashData, CompareData } from '../utils/hash.js';

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
}