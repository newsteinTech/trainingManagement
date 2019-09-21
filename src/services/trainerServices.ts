import * as express from "express";
import * as bcrypt from "bcrypt";
import { TrainerModel } from "../model/trainerModel";
import * as jwt from "jsonwebtoken";
export class TrainerServices {

    public static async createTrainer(req: express.Request, res: express.Response) {
        try {
            let encryptedPassword = await bcrypt.hash(req.body.Password, 14);
            req.body.Password = encryptedPassword;
            let newTrainer = new TrainerModel(req.body);
            await newTrainer.save();
            return newTrainer
        }
        catch (err) {
            console.log(err);
            return err;
        }
    }

    public static async trainerLogin(req: express.Request, res: express.Response) {
        try {
            let trainerItem: any = TrainerModel.findOne({ email: req.body.email }).exec();
            if (trainerItem) {
                let passwordsMatch = await bcrypt.compare(req.body.Password, trainerItem.Password);
                if (passwordsMatch) {
                    let options: jwt.SignOptions = { expiresIn: "4h" };
                    let payLoad = { "email": trainerItem.email, "name": trainerItem.name };
                    let token = await jwt.sign(payLoad, "secret", options);
                    console.log("Token : ", token)
                    return { "token": token }
                }
                else {
                    return ("Password incorrect ...! try again")
                }

            }
            else {
                return "access denied!"
            }
        }
        catch (err) {
            console.log(err);
            return err;
        }
    }

    public static async getAllTrainers(req: express.Request, res: express.Response) {
        try {
            let allTrainers = await TrainerModel.find().exec();
            return allTrainers
        }
        catch (err) {
            console.log(err);
            return err;
        }
    }

    public static async getTrainerById(req: express.Request, res: express.Response) {
        try {
            let trainer = await TrainerModel.findById(req.params.trainerId).exec();
            return trainer
        }
        catch (err) {
            console.log(err);
            return err;
        }
    }

    public static async updateTrainerById(req: express.Request, res: express.Response) {
        try {
            let updateTrainer = await TrainerModel.updateOne(req.params.trainerId, req.body).exec();
            return updateTrainer
        }
        catch (err) {
            console.log(err);
            return err;
        }
    }

    public static async deleteTrainer(req: express.Request, res: express.Response) {
        try {
            let deleteTrainer = await TrainerModel.deleteOne(req.params.trainerId).exec();
        }
        catch (err) {
            console.log(err);
            return err;
        }
    }
}