import { Router } from 'express';
import { CourseController } from '../controller/courseController';

export const courseRoutes: Router = Router();

let courseControllerObj = new CourseController;

courseRoutes.post('/createCourse', courseControllerObj.newCourse);
courseRoutes.put('/assignTrainers/:courseId', courseControllerObj.assignTrainersToCourses);
courseRoutes.put('/updateCourse/:courseId', courseControllerObj.updateCourse);
courseRoutes.delete('/deleteCourse/:CourseId', courseControllerObj.deleteCourse);