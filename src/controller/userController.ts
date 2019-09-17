import * as express from "express";
import { UserServices } from "../services/userServices";

export class userController{
    public async registerUser(req:express.Request, res:express.Response){
        let result = UserServices.registerUser(req,res);
        res.json(result)
    }

    public async login(req:express.Request, res:express.Response){
        let result = UserServices.login(req,res);
        res.json(result)
    }

    public async getAllUsers(req:express.Request, res: express.Response){
        let result = await UserServices.getAllUsers(req, res);
        res.json(result)
    }

    public async getUser(req:express.Request, res: express.Response){
        let result = await UserServices.getUser(req, res);
        res.json(result)
    }

    public async updateUser(req:express.Request, res:express.Response){
        let result = UserServices.updateUser(req,res);
        res.json(result)
    }

    public async deleteUser(req:express.Request, res:express.Response){
        let result = UserServices.deleteUser(req,res);
        res.json(result)
    }
}