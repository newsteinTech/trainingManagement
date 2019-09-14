import * as express from "express";
import { UserServices } from "../services/userServices";

export class userController{
    public async registerUser(req:express.Request, res:express.Response){
        let result = UserServices.registerUser(req,res);
        return result
    }

    public async login(req:express.Request, res:express.Response){
        let result = UserServices.login(req,res);
        return result
    }

    public async getAllUsers(req:express.Request, res: express.Response){
        let result = await UserServices.getAllUsers(req, res);
        return result;
    }

    public async getUser(req:express.Request, res: express.Response){
        let result = await UserServices.getUser(req, res);
        return result;
    }

    public async updateUser(req:express.Request, res:express.Response){
        let result = UserServices.updateUser(req,res);
        return result
    }

    public async deleteUser(req:express.Request, res:express.Response){
        let result = UserServices.deleteUser(req,res);
        return result
    }
}