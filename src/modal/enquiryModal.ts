import * as mongoose from "mongoose";
const enquirySchema = new mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String,required: true},
    mobile: String,
    message: String,
    courses: {classType:{type:String, enum:['online','offline']},name:{type:String}},
    active : Boolean,
    followups: [{createdDate:{type: Date,  default:Date.now}},{message:{type: String}}],
    createdDate: {type: Date, default:Date.now},
    updatedDate: {type: Date, default:Date.now},
    status: {type:String , enum: ['lead','Demo Scheduled']}
});

export const enquiryModel = mongoose.model('enquiry',enquirySchema); 
