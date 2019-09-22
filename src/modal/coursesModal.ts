import * as mongoose from "mongoose";
const coursesSchema = new mongoose.Schema({
    name: {type: String, required: true, unique: true},
    description: String,
    link: String,
    active: Boolean,
    createdDate: {type: Date, default:Date.now},
    updatedDate: {type: Date, default:Date.now},
});

export const coursesModel = mongoose.model('courses',coursesSchema); 
