import * as express from "express";
import { TrainerServices } from "../services/trainerServices";

export class TrainerController {

    public async createTrainer(req: express.Request, res: express.Response) {
        let result = await TrainerServices.createTrainer(req, res);
        res.json(result);
    }

    public async trainerLogin(req: express.Request, res: express.Response) {
        let result = await TrainerServices.trainerLogin(req, res);
        res.json(result)
    }

    public async getAllTrainers(req: express.Request, res: express.Response) {
        let result = await TrainerServices.getAllTrainers(req, res);
        res.json(result)
    }

    public async getTrainerById(req: express.Request, res: express.Response) {
        let result = await TrainerServices.getTrainerById(req, res);
        res.json(result)
    }

    public async updateTrainer(req: express.Request, res: express.Response) {
        let result = await TrainerServices.updateTrainerById(req, res);
        res.json(result)
    }

    public async deleteTrainer(req: express.Request, res: express.Response) {
        let result = await TrainerServices.deleteTrainer(req, res);
        res.json(result);
    }
}