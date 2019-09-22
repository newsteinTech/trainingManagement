import * as express from "express";
import {coursesModel} from "../modal/CoursesModal";
export class CoursesService{
    public static async getAllCourses(req: express.Request, res: express.Response){
        try{
            let allCourses = await coursesModel.find().exec();
            return allCourses;
        }
        catch(err){
            console.log(err);
            return err;
        }
    }

    public static async getCoursesById(req: express.Request, res: express.Response){
        try{
            let getCourses = await coursesModel.findById(req.params.id).exec();
            return getCourses;
        }
        catch(err){
            console.log(err);
            return err;
        }
    }

    public static async updateCoursesById(req:express.Request, res:express.Response){
        try {
            let updateCoursesById:any = await coursesModel.findById(req.params.id).exec();
            updateCoursesById.name = req.body.name;
            updateCoursesById.sex = req.body.sex;
            updateCoursesById.dob = req.body.dob;
            updateCoursesById.bio = req.body.bio;
            updateCoursesById.movieProduced = req.body.movieProduced;
            await updateCoursesById.save();
            return updateCoursesById;
        } catch (err) {
            console.log(err);
            return err;            
        }
    }
    
    public static async createCourses(req:express.Request, res:express.Response){
        try{
            let createCourses = new coursesModel(req.body);
            await createCourses.save();
            return createCourses;
        }catch(err){
            console.log(err);
            return err;
        }
    }
}