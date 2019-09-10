import * as express from "express";
import {superAdminModel} from "./../modal/superAdminModal";
export class SuperAdminService{
    public static async getAllSuperAdmin(req: express.Request, res: express.Response){
        try{
            let allSuperAdmin = await superAdminModel.find().exec();
            return allSuperAdmin;
        }
        catch(err){
            console.log(err);
            return err;
        }
    }

    public static async getSuperAdminById(req: express.Request, res: express.Response){
        try{
            let getSuperAdmin = await superAdminModel.findById(req.params.id).exec();
            return getSuperAdmin;
        }
        catch(err){
            console.log(err);
            return err;
        }
    }

    public static async updateSuperAdminById(req:express.Request, res:express.Response){
        try {
            let updateSuperAdminById:any = await superAdminModel.findById(req.params.id).exec();
            updateSuperAdminById.name = req.body.name;
            updateSuperAdminById.sex = req.body.sex;
            updateSuperAdminById.dob = req.body.dob;
            updateSuperAdminById.bio = req.body.bio;
            updateSuperAdminById.movieProduced = req.body.movieProduced;
            await updateSuperAdminById.save();
            return updateSuperAdminById;
        } catch (err) {
            console.log(err);
            return err;            
        }
    }
    
    public static async createSuperAdmin(req:express.Request, res:express.Response){
        try{
            let createSuperAdmin = new superAdminModel(req.body);
            await createSuperAdmin.save();
            return createSuperAdmin;
        }catch(err){
            console.log(err);
            return err;
        }
    }
}