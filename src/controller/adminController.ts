import * as express from "express";
import { AdminService } from "./../service/adminServices";


export class AdminController {
    public async getAllAdmin(req: express.Request, res: express.Response) {
        let result = await AdminService.getAllAdmin(req, res);
        res.json(result);
    }

    public async getAdminById(req: express.Request, res: express.Response) {
        let result = await AdminService.getAdminById(req, res);
        res.json(result);
    }

    public async updateAdminById(req: express.Request, res: express.Response) {
        let result = await AdminService.updateAdminById(req, res);
        res.json(result);
    }

    public async createAdmin(req: express.Request, res: express.Response) {
        let result = await AdminService.createAdmin(req, res);
        res.json(result);
    }
}