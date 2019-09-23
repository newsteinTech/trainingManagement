import * as express from "express";
import { EnquiryServices } from "../services/enquiryServices";

export class EnquiryController {

    public async newEnquiry(req: express.Request, res: express.Response) {
        let result = await EnquiryServices.createEnquiry(req, res);
        res.json(result);
    }

    public async getAllEnquiries(req: express.Request, res: express.Response) {
        let result = await EnquiryServices.getAllEnquiries(req, res);
        res.json(result)
    }

    public async getEnquiryById(req: express.Request, res: express.Response) {
        let result = await EnquiryServices.getEnquiryById(req, res);
        res.json(result)
    }

    public async deleteEnquiry(req: express.Request, res: express.Response) {
        let result = await EnquiryServices.deleteEnquiry(req, res);
        res.json(result);
    }
}