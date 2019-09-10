import { Router } from "express";
import { SuperAdminController } from "./../controller/SuperAdminController";

let SuperAdminControllerObj = new SuperAdminController();

export const SuperAdminRoutes: Router = Router();
SuperAdminRoutes.get('/',SuperAdminControllerObj.getAllSuperAdmin);
SuperAdminRoutes.get('/getSuperAdminById/:id',SuperAdminControllerObj.getSuperAdminById);
SuperAdminRoutes.put('/updateSuperAdminById/:id',SuperAdminControllerObj.updateSuperAdminById);
SuperAdminRoutes.post('/createSuperAdmin',SuperAdminControllerObj.createSuperAdmin);