import * as express from "express";
import {EnquiryService} from "../service/enquiryServices";
export class EnquiryController{
    public async getAllEnquiry(req:express.Request, res:express.Response){
        let result = await EnquiryService.getAllEnquiry(req,res);
        res.json(result);
    }

    public async getEnquiryById(req:express.Request, res:express.Response){
        let result = await EnquiryService.getEnquiryById(req,res);
        res.json(result);
    }

    public async updateEnquiryById(req:express.Request, res:express.Response){
        let result = await EnquiryService.updateEnquiryById(req,res);
        res.json(result);
    }

    public async createEnquiry(req:express.Request, res:express.Response){
        let result = await EnquiryService.createEnquiry(req,res);
        res.json(result);
    }
}