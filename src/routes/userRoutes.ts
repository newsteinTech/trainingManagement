import * as express from "express";
import { Router } from "express"
import { userController } from "../controller/userController";

let userControllerObj = new userController;
export const userRoutes: Router = Router();

userRoutes.get('/getAllUsers', userControllerObj.getAllUsers);
userRoutes.get('/getUser/:userId', userControllerObj.getUser)
userRoutes.put('/update/:userId', userControllerObj.updateUser);
userRoutes.delete('/delete/:userId', userControllerObj.deleteUser);