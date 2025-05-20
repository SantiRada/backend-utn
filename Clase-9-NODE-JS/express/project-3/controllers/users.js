import { HashData, CompareData } from '../utils/hash.js';

export class UserController {
    constructor (userModel) {
        this.userModel = userModel;
    }

    login = async (user, password) => {
        // md5    // 123 -> asd9a87sd9a8dasd77asd8
        // bcrypt // 123 -> asd9a87sd9a8dasd77asd8 // bcrypt(123, 10) // asd9a87sd9a8dasd77asd8
        // sha256 // 123 -> asdasd87a6sda7sd7as7da // 

        const passwordHash = await HashData(password);

        const response = await this.userModel.VerifyUser(user);

        const verify = await CompareData(passwordHash, response[0].password);

        return verify;
    }

    register = async (user, password) => {
        const passwordHash = await HashData(password);

        const response = await this.userModel.RegisterUser(user, passwordHash);

        return response;
    }
}