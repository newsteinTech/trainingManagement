import { Router } from "express";
import { EnquiryController } from "../controller/enquiryController";

export const enquiryRoutes: Router = Router()

let enquiryControllerObj = new EnquiryController;

enquiryRoutes.get('/allEnquiries', enquiryControllerObj.getAllEnquiries);
enquiryRoutes.get('/getEnquiry/:enquiryId', enquiryControllerObj.getEnquiryById);
enquiryRoutes.delete('/deleteEnquiry/:enquiryId', enquiryControllerObj.deleteEnquiry)