import UserModel from "../models/User.Model.js";

export default class UserController {
    
    static async GetUsers (){
        const response = await UserModel.GetUsers();

        return response;
    }

    static async Login (mail, password){
        const response = await UserModel.Login(mail, password);

        return {
            success: response ? true : false,
            data: response
        };
    }
    static async Register (mail, name, password){
        const response = await UserModel.Register(mail, name, password);

        return {
            success: response ? true : false,
            data: response
        };
    }
}