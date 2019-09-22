import { Router } from "express";
import { EnquiryController } from "../controller/EnquiryController";

let EnquiryControllerObj = new EnquiryController();

export const EnquiryRoutes: Router = Router();
EnquiryRoutes.get('/',EnquiryControllerObj.getAllEnquiry);
EnquiryRoutes.get('/getEnquiryById/:id',EnquiryControllerObj.getEnquiryById);
EnquiryRoutes.put('/updateEnquiryById/:id',EnquiryControllerObj.updateEnquiryById);
EnquiryRoutes.post('/createEnquiry',EnquiryControllerObj.createEnquiry);