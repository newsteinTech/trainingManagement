import { Router } from "express";
import { TrainerController } from "./../controller/TrainerController";

let TrainerControllerObj = new TrainerController();

export const TrainerRoutes: Router = Router();
TrainerRoutes.get('/',TrainerControllerObj.getAllTrainer);
TrainerRoutes.get('/getTrainerById/:id',TrainerControllerObj.getTrainerById);
TrainerRoutes.put('/updateTrainerById/:id',TrainerControllerObj.updateTrainerById);
TrainerRoutes.post('/createTrainer',TrainerControllerObj.createTrainer);