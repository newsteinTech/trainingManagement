import { Router } from "express";
import { AdminController } from "./../controller/AdminController";

let AdminControllerObj = new AdminController();

export const AdminRoutes: Router = Router();
AdminRoutes.get('/',AdminControllerObj.getAllAdmin);
AdminRoutes.get('/getAdminById/:id',AdminControllerObj.getAdminById);
AdminRoutes.put('/updateAdminById/:id',AdminControllerObj.updateAdminById);
AdminRoutes.post('/createAdmin',AdminControllerObj.createAdmin);