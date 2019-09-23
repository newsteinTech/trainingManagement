import * as mongoose from "mongoose";

const courseSchema = new mongoose.Schema({
    "Name": { type: String, required: true },
    "Description": { type: String, required: true },
    "Link": { type: String },
    "IsActive": { type: Boolean, required: true },
    "CreatedDate": { type: Date, default: Date.now },
    "UpdatedDate": { type: Date },
    "Trainers": { type: String, required: true },
    "CourseType": { type: String, enum: ["Online", "Offline", "Both"] }
})

export const CourseModel = mongoose.model('course', courseSchema)