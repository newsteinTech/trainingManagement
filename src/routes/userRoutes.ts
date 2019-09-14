import * as express from "express";
import {Router} from "express"
import { userController } from "../controller/userController";

let userControllerObj = new userController;
export const userRoutes : Router = Router();

userRoutes.get('/getAllUsers', userControllerObj.getAllUsers);
userRoutes.get('/getUser', userControllerObj.getUser)
userRoutes.put('/update', userControllerObj.updateUser);
userRoutes.put('/delete', userControllerObj.deleteUser);