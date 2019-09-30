import { Router } from "express";
import { UserController } from "../controller/userController";

let UserControllerObj = new UserController();

export const UserRoutes: Router = Router();
UserRoutes.get('/',UserControllerObj.getAllUser);
UserRoutes.get('/getUserById/:id',UserControllerObj.getUserById);
UserRoutes.put('/updateUserById/:id',UserControllerObj.updateUserById);
