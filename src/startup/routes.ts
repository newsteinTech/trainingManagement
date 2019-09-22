import express = require("express");
import {AdminRoutes} from "./../routes/adminRoutes";
import {StudentRoutes} from "./../routes/studentRoutes";
import {SuperAdminRoutes} from "./../routes/superAdminRoutes";
import {TrainerRoutes} from "./../routes/trainerRoutes";
import {UserController} from "./../controller/userController";
import {AuthenticateService} from './../middleware/authenticate';
import { EnquiryRoutes } from "./../routes/enquiryRoutes";
import { EnquiryController } from "./../controller/EnquiryController";
import { CoursesController } from "./../controller/coursesController";
import { CoursesRoutes } from "./../routes/coursesRoutes";
let userControllerObj = new UserController();
let enquiryControllerObj = new EnquiryController();
let coursesControllerObj = new CoursesController();
export class Routes{
    constructor(){

    }

    public static configRoutes(app:express.Application):void{
        app.get('/',(req: express.Request,res: express.Response)=>{
            res.status(200).json({"success":"Server is running"});
        });

        app.post('/register', userControllerObj.createUser);
        app.post('/login',userControllerObj.login);
        app.post('/enquiry',enquiryControllerObj.createEnquiry);
        app.get('/courses',coursesControllerObj.getAllCourses);

        app.use(AuthenticateService.authenticate); //all those url which we want to authenticate it will come below of line or vice-versa
        
        app.use('/admin',AdminRoutes);
        app.use('/student',StudentRoutes);
        app.use('/superAdmin',SuperAdminRoutes);        
        app.use('/trainer',TrainerRoutes);
        app.use('/enquiryDetails',EnquiryRoutes);
        app.use('/coursesDetails',CoursesRoutes);       
    }
}