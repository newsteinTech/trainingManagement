import * as mongoose from "mongoose";
const coursesSchema = new mongoose.Schema({
    name: {type: String, required: true, unique: true},
    description: String,
    link: String,
    active: Boolean,
    courseType: {type:String, enum:['online','offline','both']}, 
    createdDate: {type: Date, default:Date.now},
    updatedDate: {type: Date, default:Date.now}
});

export const coursesModel = mongoose.model('courses',coursesSchema); 
