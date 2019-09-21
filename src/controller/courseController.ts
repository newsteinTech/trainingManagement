import * as express from "express";
import { CourseServices } from "services/courseServices";

export class CourseController {

    public async newCourse(req: express.Request, res: express.Response) {
        let result = await CourseServices.createCourse(req, res);
        res.json(result);
    }

    public async getAllCourses(req: express.Request, res: express.Response) {
        let result = await CourseServices.getAllCourses(req, res);
        res.json(result)
    }

    public async getCourseById(req: express.Request, res: express.Response) {
        let result = await CourseServices.getCourseById(req, res);
        res.json(result)
    }

    public async updateCourse(req: express.Request, res: express.Response) {
        let result = await CourseServices.updateCourseById(req, res);
        res.json(result)
    }

    public async deleteCourse(req: express.Request, res: express.Response) {
        let result = await CourseServices.deleteCourse(req, res);
        res.json(result);
    }
}