import * as express from "express";
import * as bcrypt from "bcrypt";
import { userModel } from '../model/userModel';
import * as jwt from "jsonwebtoken";
export class UserServices {

    public static async registerUser(req: express.Request, res: express.Response) {
        try {
            let encryptedPassword = await bcrypt.hash(req.body.Password, 14);
            req.body.Password = encryptedPassword;
            let newUser = new userModel(req.body);
            await newUser.save();
            return newUser;
        }
        catch (err) {
            console.log(err);
            return err;
        }
    }

    public static async login(req: express.Request, res: express.Response) {
        try {
            let userItem: any = await userModel.findOne({ email: req.body.email }).exec();
            if (userItem) {
                let passwordMatch = await bcrypt.compare(req.body.Password, userItem.Password);
                if (passwordMatch) {
                    let options: jwt.SignOptions = { expiresIn: "3h" };
                    let payLoad = { "email": userItem.email, "name": userItem.name };
                    let token = await jwt.sign(payLoad, "secret", options);
                    console.log("Token is : " + token);
                    return { "token": token }
                } else {
                    return "Password Incorrect... Please enter the correct Password";
                }
            } else {
                return "User not registered..!!"
            }
        }
        catch (err) {
            console.log(err);
            return (err);
        }
    }

    public static async getAllUsers(req: express.Request, res: express.Response) {
        try {
            let allUsers = await userModel.find().exec();
            return allUsers;
        } catch (err) {
            console.log(err);
            return err;
        }
    }

    public static async getUser(req: express.Request, res: express.Response) {
        try {
            let user = await userModel.findById(req.params.userId).exec();
            return user;
        }
        catch (err) {
            console.log(err);
            return err;
        }

    }
    public static async updateUser(req: express.Request, res: express.Response) {
        try {
            let updateUser: any = await userModel.findById(req.params.userId).exec();
            updateUser.UserName = req.body.UserName;
            updateUser.Password = req.body.Password;
            updateUser.Mobile = req.body.Mobile;
            updateUser.Email = req.body.Email;
            updateUser.IsActive = req.body.IsActive;
            updateUser.UpdatedDate = req.body.UpdatedDate;
            await updateUser.save();
            return updateUser;
        } catch (err) {
            console.log(err);
            return err;
        }
    }

    public static async deleteUser(req: express.Request, res: express.Response) {
        try {
            let deleteUser = await userModel.findByIdAndDelete(req.params.userId).exec();
            return deleteUser;
        } catch (err) {
            console.log(err);
            return err;
        }
    }
}  