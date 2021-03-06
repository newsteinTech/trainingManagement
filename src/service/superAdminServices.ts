import express = require("express");
import {superAdminModel} from "./../modal/superAdminModal";
import jwt = require("jsonwebtoken");
import bcrypt = require("bcrypt");
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

    public static async login(req: express.Request, res: express.Response){
        try {
            //Check use exist -> by email
            let user:any = await superAdminModel.findOne({"email":req.body.email}).exec();
            console.log(user);
            if(user){
                //Check password match or not
                let passwordMatched = await bcrypt.compare(req.body.password, user.password);
                if(passwordMatched){
                    let options:jwt.SignOptions = {
                        //by default it has behaviour of 365 days
                        //365d => 365 days
                        //12h => 12 hours
                        expiresIn : "365d"
                    };

                    //what exactly information we want to put in payload
                    let payload = {
                        "email" : user.email,
                        "name" : user.name,
                        "userId" : user._id
                    }

                    let token = await jwt.sign(payload,"secretkey",options);
                    return {"token" : token} ;
                    // "login success";
                }
                else{
                    return "Password Incorrect";
                }
            }else{
                return "user not registered by email";
            }
            // let userLogin = await userModel.findOne({"email":req.body.email, "password":req.body.password}).exec();
            // return userLogin;
        } catch (err) {
            console.log(err);
            return err;
        }
    }
}