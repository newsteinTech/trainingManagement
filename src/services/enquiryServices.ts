import * as express from "express";
import { EnquiryModel } from "model/enquiryModel";


export class EnquiryServices {

    public static async createEnquiry(req: express.Request, res: express.Response) {
        try {
            let newEnquiry = new EnquiryModel(req.body);
            await newEnquiry.save();
            return newEnquiry
        }
        catch (err) {
            console.log(err);
            return err;
        }
    }

    public static async getAllEnquiries(req: express.Request, res: express.Response) {
        try {
            let allEnquiries = await EnquiryModel.find().exec();
            return allEnquiries
        }
        catch (err) {
            console.log(err);
            return err;
        }
    }

    public static async getEnquiryById(req: express.Request, res: express.Response) {
        try {
            let enquiry = await EnquiryModel.findById(req.params.enquiryId).exec();
            return enquiry
        }
        catch (err) {
            console.log(err);
            return err;
        }
    }

    public static async deleteEnquiry(req: express.Request, res: express.Response) {
        try {
            let deleteTrainer = await EnquiryModel.deleteOne(req.params.enquiryId).exec();
        }
        catch (err) {
            console.log(err);
            return err;
        }
    }
}