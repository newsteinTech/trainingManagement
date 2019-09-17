import * as express from "express";
import { userController } from "../controller/userController";
import { AuthenticationService } from "../middleware/authentication";
import {userRoutes} from '../routes/userRoutes'
import { trainerRoutes } from "routes/trainerRoutes";
export class Routes {
    
    constructor() {

    }

    public static registerRoutes(app: express.Application) {

        app.get('/', (req: any, res: any) => {
            return res.status(200)
            .json({"Success!!":"Server Started..."});
        });

        let userControllerobj = new userController;
        app.post('/register', userControllerobj.registerUser);
        app.post('/login', userControllerobj.login);
        app.use(AuthenticationService.authenticate);
        app.use('/user', userRoutes);
        app.use('/trainer', trainerRoutes)
    }
}