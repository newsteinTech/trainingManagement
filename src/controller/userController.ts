import express = require("express");
import {UserService} from "./../service/userServices";
export class UserController{
    public async getAllUser(req:express.Request, res:express.Response){
        let result = await UserService.getAllUser(req,res);
        res.json(result);
    }

    public async getUserById(req:express.Request, res:express.Response){
        let result = await UserService.getUserById(req,res);
        res.json(result);
    }

    public async updateUserById(req:express.Request, res:express.Response){
        // console.log(req.body);
        // console.log(req.params);
        let result = await UserService.updateUserById(req,res);
        res.json(result);
    }

    public async createUser(req:express.Request, res:express.Response){
        let result = await UserService.createUser(req,res);
        res.json(result);
    }

    public async login(req: express.Request,res: express.Response){
        let result = await UserService.login(req,res);
        res.json(result);
    }
}