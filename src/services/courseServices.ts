import * as express from "express";
import { CourseModel } from '../model/courseModel'

export class CourseServices {

    public static async createCourse(req: express.Request, res: express.Response) {
        try {
            let newCourse = new CourseModel(req.body);
            await newCourse.save();
            return newCourse
        }
        catch (err) {
            console.log(err);
            return err;
        }
    }

    public static async getAllCourses(req: express.Request, res: express.Response) {
        try {
            let allCourses = await CourseModel.find().exec();
            return allCourses
        }
        catch (err) {
            console.log(err);
            return err;
        }
    }

    public static async getCourseById(req: express.Request, res: express.Response) {
        try {
            let course = await CourseModel.findById(req.params.courseId).exec();
            return course;
        }
        catch (err) {
            console.log(err);
            return err;
        }
    }

    public static async updateCourseById(req: express.Request, res: express.Response) {
        try {
            let UpdateCourse = await CourseModel.updateOne(req.params.courseId, req.body).exec();
            return UpdateCourse;
        }
        catch (err) {
            console.log(err);
            return err;
        }
    }

    public static async deleteCourse(req: express.Request, res: express.Response) {
        try {
            let deleteTrainer = await CourseModel.deleteOne(req.params.courseId).exec();
        }
        catch (err) {
            console.log(err);
            return err;
        }
    }
}