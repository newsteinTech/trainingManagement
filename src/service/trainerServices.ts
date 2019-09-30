import * as express from "express";
import {trainerModel} from "./../modal/trainerModal";
import {userModel} from "./../modal/userModal";
import bcrypt = require("bcrypt");
export class TrainerService{
    public static async getAllTrainer(req: express.Request, res: express.Response){
        try{
            let allTrainer = await trainerModel.find().exec();
            return allTrainer;
        }
        catch(err){
            console.log(err);
            return err;
        }
    }

    public static async getTrainerById(req: express.Request, res: express.Response){
        try{
            let getTrainer = await trainerModel.findById(req.params.id).exec();
            return getTrainer;
        }
        catch(err){
            console.log(err);
            return err;
        }
    }

    public static async updateTrainerById(req:express.Request, res:express.Response){
        try {
            let updateTrainerById:any = await trainerModel.findById(req.params.id).exec();
            updateTrainerById.name = req.body.name;
            updateTrainerById.sex = req.body.sex;
            updateTrainerById.dob = req.body.dob;
            updateTrainerById.bio = req.body.bio;
            updateTrainerById.movieProduced = req.body.movieProduced;
            await updateTrainerById.save();
            return updateTrainerById;
        } catch (err) {
            console.log(err);
            return err;            
        }
    }
    
    public static async createTrainer(req:express.Request, res:express.Response){
        try{
            let encyptPassword = await bcrypt.hash(req.body.password, 12);
            req.body.password = encyptPassword;
            let createUser = new userModel(req.body);
            await createUser.save();
            return createUser;
        }catch(err){
            console.log(err);
            return err;
        }
    }
}