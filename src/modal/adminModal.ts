import * as mongoose from "mongoose";
const adminSchema = new mongoose.Schema({
    username: {type: String, required: true, unique: true},
    password: String,
    mobile: String,
    email: String,
    active : Boolean,
    createdDate: {type: Date, default:Date.now},
    updatedDate: {type: Date, default:Date.now},
    role: {type:String , enum: ['admin','trainer','student','super-admin']}
});

export const adminModel = mongoose.model('admin',adminSchema); 
