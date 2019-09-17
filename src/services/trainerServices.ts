import * as express from "express";
import { TrainerModel } from "../model/trainerModel";

export class TrainerServices{

    public static async createTrainer(req:express.Request, res : express.Response){
        try{
            let newTrainer = new TrainerModel(req.body);
            await newTrainer.save();
            return newTrainer
        }
        catch(err){
            console.log(err);
            return err;
        }
    }

    public static async getAllTrainers(req:express.Request, res:express.Response){
        try{
            let allTrainers = await TrainerModel.find().exec();
            return allTrainers
        }
        catch(err){
            console.log(err);
            return err;
        }
    }

    public static async getTrainerById(req:express.Request, res:express.Response){
        try{
            let trainer = await TrainerModel.findById(req.params.trainerId).exec();
            return trainer
        }
        catch(err){
            console.log(err);
            return err;
        }
    }

    public static async updateTrainerById(req:express.Request, res: express.Response){
        try{
            let updateTrainer = await TrainerModel.updateOne(req.params.trainerId,req.body).exec();
            return updateTrainer
        }
        catch(err){
            console.log(err);
            return err;
        }
    }

    public static async deleteTrainer(req:express.Request, res: express.Response){
        try{
            let deleteTrainer = await TrainerModel.deleteOne(req.params.trainerId)
        }
        catch(err){
            console.log(err);
            return err;
        }
    }
}