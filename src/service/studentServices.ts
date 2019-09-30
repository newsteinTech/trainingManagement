import * as express from "express";
import {studentModel} from "./../modal/studentModal";
import {userModel} from "./../modal/userModal";
import bcrypt = require("bcrypt");
export class StudentService{
    public static async getAllStudent(req: express.Request, res: express.Response){
        try{
            let allStudent = await studentModel.find().exec();
            return allStudent;
        }
        catch(err){
            console.log(err);
            return err;
        }
    }

    public static async getStudentById(req: express.Request, res: express.Response){
        try{
            let getStudent = await studentModel.findById(req.params.id).exec();
            return getStudent;
        }
        catch(err){
            console.log(err);
            return err;
        }
    }

    public static async updateStudentById(req:express.Request, res:express.Response){
        try {
            let updateStudentById:any = await studentModel.findById(req.params.id).exec();
            updateStudentById.name = req.body.name;
            updateStudentById.sex = req.body.sex;
            updateStudentById.dob = req.body.dob;
            updateStudentById.bio = req.body.bio;
            updateStudentById.movieProduced = req.body.movieProduced;
            await updateStudentById.save();
            return updateStudentById;
        } catch (err) {
            console.log(err);
            return err;            
        }
    }
    
    public static async createStudent(req:express.Request, res:express.Response){
        try{
            let encyptPassword = await bcrypt.hash(req.body.password, 12);
            req.body.password = encyptPassword;
            let createUser = new userModel(req.body);
            await createUser.save();
            return createUser;
        }catch(err){
            console.log(err);
            return err;
        }
    }
}