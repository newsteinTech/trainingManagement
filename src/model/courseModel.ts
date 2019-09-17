import * as mongoose from "mongoose";

const courseSchema = new mongoose.Schema({
    "Name" : {type: String, required:true},
    "Description" : {type: String},
    "Link" : {type: String},
    "IsActive" : {type: Boolean, required:true},
    "CreatedDate" : {type: Date.now},
    "UpdatedDate" : {type:Date},
    "Trainers" : {type: String},
    "CourseType" : {type: String, enum:["Online", "Offline", "Both"]}
})

export const CourseModel =  mongoose.model('course', courseSchema)