import * as express from "express";
import {TrainerService} from "./../service/trainerServices";
export class TrainerController{
    public async getAllTrainer(req:express.Request, res:express.Response){
        let result = await TrainerService.getAllTrainer(req,res);
        res.json(result);
    }

    public async getTrainerById(req:express.Request, res:express.Response){
        let result = await TrainerService.getTrainerById(req,res);
        res.json(result);
    }

    public async updateTrainerById(req:express.Request, res:express.Response){
        let result = await TrainerService.updateTrainerById(req,res);
        res.json(result);
    }

    public async createTrainer(req:express.Request, res:express.Response){
        let result = await TrainerService.createTrainer(req,res);
        res.json(result);
    }
}