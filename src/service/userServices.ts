import express = require("express");
import {userModel} from "./../modal/userModal";
import * as jwt from "jsonwebtoken";
import bcrypt = require("bcrypt");
export class UserService{
    public static async getAllUser(req: express.Request, res: express.Response){
        try{
            let allUser = await userModel.find().exec();
            return allUser;
        }
        catch(err){
            console.log(err);
            return err;
        }
    }

    public static async getUserById(req: express.Request, res: express.Response){
        try{
            let getUser = await userModel.findById(req.params.id).exec();
            return getUser;
        }
        catch(err){
            console.log(err);
            return err;
        }
    }

    public static async updateUserById(req:express.Request, res:express.Response){
        try {
            let updateUserById: any = await userModel.findById(req.params.id).exec();
            console.log(updateUserById);
            updateUserById.name = req.body.name;
            updateUserById.mobile = req.body.mobile;
            updateUserById.active = req.body.active;
            await updateUserById.save();
            return updateUserById;
        } catch (err) {
            console.log(err);
            return err;            
        }
    }
    
    public static async createUser(req:express.Request, res:express.Response){
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

    public static async getUsersAllCard(req:any, res:express.Response){
        try {
            let getUsersAllCard = await userModel.find({_id:req.user.userId}).populate('myCards').exec();
            return getUsersAllCard;
        } catch (err) {
            console.log(err);
            return err;
        }
    }

    public static async assignCardsToUser(req:any, res:express.Response){
        try {
            let assignCardsToUser = await userModel.update({_id:req.user.userId},req.body).exec();
            return assignCardsToUser;
        } catch (err) {
            console.log(err);
            return err;
        }
    }

    public static async login(req: express.Request, res: express.Response){
        try {
            //Check use exist -> by email
            console.log(req.body);
            let user:any = await userModel.findOne({"email":req.body.useremail}).exec();
            console.log(user);
            if(user){
                //Check password match or not
                let passwordMatched = await bcrypt.compare(req.body.userpassword, user.password);
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
                        "userId" : user._id,
                        "role" : user.role
                    }

                    let token = await jwt.sign(payload,"secretkey",options);
                    return  token;
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