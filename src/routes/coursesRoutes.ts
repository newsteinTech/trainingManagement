import { Router } from "express";
import { CoursesController } from "../controller/coursesController";

let CoursesControllerObj = new CoursesController();

export const CoursesRoutes: Router = Router();
CoursesRoutes.get('/',CoursesControllerObj.getAllCourses);
CoursesRoutes.get('/getCoursesById/:id',CoursesControllerObj.getCoursesById);
CoursesRoutes.put('/updateCoursesById/:id',CoursesControllerObj.updateCoursesById);
CoursesRoutes.post('/createCourses',CoursesControllerObj.createCourses);