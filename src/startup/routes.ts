import express = require("express");
import {AdminRoutes} from "./../routes/adminRoutes";
import {StudentRoutes} from "./../routes/studentRoutes";
import {SuperAdminRoutes} from "./../routes/superAdminRoutes";
import {TrainerRoutes} from "./../routes/trainerRoutes";
import {UserController} from "./../controller/userController";
import {AuthenticateService} from './../middleware/authenticate';
let userControllerObj = new UserController();
export class Routes{
    constructor(){

    }

    public static configRoutes(app:express.Application):void{
        app.get('/',(req: express.Request,res: express.Response)=>{
            res.status(200).json({"success":"Server is running"});
        });

        app.post('/register', userControllerObj.createUser);
        app.post('/login',userControllerObj.login);

        app.use(AuthenticateService.authenticate); //all thosa url which we want to authenticate it will come below of line or vice-versa
        
        app.use('/admin',AdminRoutes);
        app.use('/student',StudentRoutes);
        app.use('/superAdmin',SuperAdminRoutes);        
        app.use('/trainer',TrainerRoutes);
        
    }
}