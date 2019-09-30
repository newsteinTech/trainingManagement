import * as mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    username: {type: String, required: true, unique: true},
    firstname: {type: String, required: true},
    lastname: {type: String, required: true},
    password: String,
    mobile: String,
    email: String,
    active : Boolean,
    createdDate: {type: Date, default:Date.now},
    updatedDate: {type: Date, default:Date.now},
    role: {type:String , enum: ['admin','trainer','student','super-admin']}
});

export const userModel = mongoose.model('user',userSchema); 
