import * as express from "express";
import { userController } from "../controller/userController";
import { AuthenticationService } from "../middleware/authentication";
import { userRoutes } from '../routes/userRoutes'
import { trainerRoutes } from "../routes/trainerRoutes";
import { TrainerController } from "../controller/trainerController";
import { EnquiryController } from "../controller/enquiryController";
import { enquiryRoutes } from "../routes/enquiryRoutes";
import { CourseController } from "../controller/courseController";
import { courseRoutes } from "../routes/courseRoutes";
export class Routes {

    constructor() {

    }

    public static registerRoutes(app: express.Application) {

        app.get('/', (req: any, res: any) => {
            return res.status(200)
                .json({ "Success!!": "Server Started..." });
        });

        let userControllerobj = new userController;
        let trainerControllerObj = new TrainerController;
        let enquiryControllerObj = new EnquiryController;
        let courseControllerObj = new CourseController;

        app.post('/register', userControllerobj.registerUser);
        app.post('/createTrainer', trainerControllerObj.createTrainer);
        app.post('/userLogin', userControllerobj.login);
        app.post('/trainerLogin', trainerControllerObj.trainerLogin);
        app.post('/enquiry', enquiryControllerObj.newEnquiry)
        app.get('/allCourses', courseControllerObj.getAllCourses);
        app.get('/getCourse/:courseId', courseControllerObj.getCourseById);
        app.get('/getCourseTrainers/:courseId', courseControllerObj.getCourseTrainers);
        app.use(AuthenticationService.authenticate);
        app.use('/user', userRoutes);
        app.use('/trainer', trainerRoutes);
        app.use('/enquiry', enquiryRoutes);
        app.use('/courses', courseRoutes);
    }
}