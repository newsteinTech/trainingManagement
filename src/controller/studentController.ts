import * as express from "express";
import {StudentService} from "./../service/studentServices";
export class StudentController{
    public async getAllStudent(req:express.Request, res:express.Response){
        let result = await StudentService.getAllStudent(req,res);
        res.json(result);
    }

    public async getStudentById(req:express.Request, res:express.Response){
        let result = await StudentService.getStudentById(req,res);
        res.json(result);
    }

    public async updateStudentById(req:express.Request, res:express.Response){
        let result = await StudentService.updateStudentById(req,res);
        res.json(result);
    }

    public async createStudent(req:express.Request, res:express.Response){
        let result = await StudentService.createStudent(req,res);
        res.json(result);
    }
}