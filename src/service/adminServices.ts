import * as express from "express";
import {adminModel} from "./../modal/adminModal";
import {userModel} from "./../modal/userModal";
import bcrypt = require("bcrypt");
export class AdminService{
    public static async getAllAdmin(req: express.Request, res: express.Response){
        try{
            let allAdmin = await userModel.find({role:"admin"}).exec();
            console.log(allAdmin);
            return allAdmin;
        }
        catch(err){
            console.log(err);
            return err;
        }
    }

    public static async getAdminById(req: express.Request, res: express.Response){
        try{
            let getAdmin = await adminModel.findById(req.params.id).exec();
            return getAdmin;
        }
        catch(err){
            console.log(err);
            return err;
        }
    }

    public static async updateAdminById(req:express.Request, res:express.Response){
        try {
            let updateAdminById:any = await adminModel.findById(req.params.id).exec();
            updateAdminById.name = req.body.name;
            updateAdminById.sex = req.body.sex;
            updateAdminById.dob = req.body.dob;
            updateAdminById.bio = req.body.bio;
            updateAdminById.movieProduced = req.body.movieProduced;
            await updateAdminById.save();
            return updateAdminById;
        } catch (err) {
            console.log(err);
            return err;            
        }
    }
    
    public static async createAdmin(req:express.Request, res:express.Response){
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