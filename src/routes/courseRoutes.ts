import { Router } from 'express';
import { CourseController } from 'controller/courseController';

export const courseRoutes: Router = Router();

let courseControllerObj = new CourseController;

courseRoutes.get('/updateCourse', courseControllerObj.updateCourse);
courseRoutes.get('/deleteCourse', courseControllerObj.deleteCourse);