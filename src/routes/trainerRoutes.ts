import { Router } from "express";
import { TrainerController } from "../controller/trainerController";

let trainerControllerObj = new TrainerController;
export const trainerRoutes: Router = Router();

trainerRoutes.post('/createTrainer', trainerControllerObj.createTrainer);
trainerRoutes.get('/getAllTrainer', trainerControllerObj.getAllTrainers);
trainerRoutes.get('/getTrainer/:trainerId', trainerControllerObj.getTrainerById);
trainerRoutes.put('/updateTrainer/:trainerId', trainerControllerObj.updateTrainer);
trainerRoutes.put('/deleteTrainer/:trainerId', trainerControllerObj.deleteTrainer);