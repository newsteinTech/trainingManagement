import * as express from "express";
import {enquiryModel} from "../modal/enquiryModal";
export class EnquiryService{
    public static async getAllEnquiry(req: express.Request, res: express.Response){
        try{
            let allEnquiry = await enquiryModel.find().exec();
            return allEnquiry;
        }
        catch(err){
            console.log(err);
            return err;
        }
    }

    public static async getEnquiryById(req: express.Request, res: express.Response){
        try{
            let getEnquiry = await enquiryModel.findById(req.params.id).exec();
            return getEnquiry;
        }
        catch(err){
            console.log(err);
            return err;
        }
    }

    public static async updateEnquiryById(req:express.Request, res:express.Response){
        try {
            let updateEnquiryById:any = await enquiryModel.findById(req.params.id).exec();
            updateEnquiryById.name = req.body.name;
            updateEnquiryById.sex = req.body.sex;
            updateEnquiryById.dob = req.body.dob;
            updateEnquiryById.bio = req.body.bio;
            updateEnquiryById.movieProduced = req.body.movieProduced;
            await updateEnquiryById.save();
            return updateEnquiryById;
        } catch (err) {
            console.log(err);
            return err;            
        }
    }
    
    public static async createEnquiry(req:express.Request, res:express.Response){
        try{
            let createEnquiry = new enquiryModel(req.body);
            await createEnquiry.save();
            return createEnquiry;
        }catch(err){
            console.log(err);
            return err;
        }
    }
}