import * as express from "express";
import {SuperAdminService} from "./../service/superAdminServices";
export class SuperAdminController{
    public async getAllSuperAdmin(req:express.Request, res:express.Response){
        let result = await SuperAdminService.getAllSuperAdmin(req,res);
        res.json(result);
    }

    public async getSuperAdminById(req:express.Request, res:express.Response){
        let result = await SuperAdminService.getSuperAdminById(req,res);
        res.json(result);
    }

    public async updateSuperAdminById(req:express.Request, res:express.Response){
        let result = await SuperAdminService.updateSuperAdminById(req,res);
        res.json(result);
    }

    public async createSuperAdmin(req:express.Request, res:express.Response){
        let result = await SuperAdminService.createSuperAdmin(req,res);
        res.json(result);
    }
}