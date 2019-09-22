import * as mongoose from "mongoose";

const EnquirySchema = new mongoose.Schema({
    "Name": { type: String, required: true },
    "Email": { type: String, required: true },
    "Mobile": { type: Number, required: true },
    "Courses": {Type:{type:String, enum:['Online', 'Offline']}, courseName:{type:String}},
    "Message": String,
    "CreatedDate": { type: Date.now },
    "UpdatedDate": { type: Date.now },
    "IsActive": Boolean,
    "Follow-Ups": [{createdDate:{type:Date}},{message:{type: String}}],
    "Status" : {type: String, enum :['Lead', 'Demo Scheduled']}
})

export const EnquiryModel = mongoose.model('Enquiry', EnquirySchema)