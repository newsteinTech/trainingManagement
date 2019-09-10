import { Router } from "express";
import { StudentController } from "./../controller/StudentController";

let StudentControllerObj = new StudentController();

export const StudentRoutes: Router = Router();
StudentRoutes.get('/',StudentControllerObj.getAllStudent);
StudentRoutes.get('/getStudentById/:id',StudentControllerObj.getStudentById);
StudentRoutes.put('/updateStudentById/:id',StudentControllerObj.updateStudentById);
StudentRoutes.post('/createStudent',StudentControllerObj.createStudent);