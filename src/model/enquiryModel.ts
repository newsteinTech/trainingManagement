import * as mongoose from "mongoose";

const EnquirySchema = new mongoose.Schema({
    "Name": { type: String, required: true },
    "Email": { type: String, required: true },
    "Mobile": { type: Number, required: true },
    "Course": String,
    "Message": String,
    "CreatedDate": { type: Date.now },
    "UpdatedDate": { type: Date.now },
    "IsActive": Boolean,
    "Follow-Ups": String
})

export const EnquiryModel = mongoose.model('Enquiry', EnquirySchema)