import * as express from "express";
import {CoursesService} from "../service/CoursesServices";
export class CoursesController{
    public async getAllCourses(req:express.Request, res:express.Response){
        let result = await CoursesService.getAllCourses(req,res);
        res.json(result);
    }

    public async getCoursesById(req:express.Request, res:express.Response){
        let result = await CoursesService.getCoursesById(req,res);
        res.json(result);
    }

    public async updateCoursesById(req:express.Request, res:express.Response){
        let result = await CoursesService.updateCoursesById(req,res);
        res.json(result);
    }

    public async createCourses(req:express.Request, res:express.Response){
        let result = await CoursesService.createCourses(req,res);
        res.json(result);
    }
}