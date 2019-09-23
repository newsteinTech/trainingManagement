import * as mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    "UserName": {type:String, required:true, unique:true},
    "Password": {type:String, required:true},
    "Mobile": {type:Number,required:true},
    "Email": {type:String, required:true},
    "IsActive": {type:Boolean, required:true},
    "CreatedDate": { type: Date, default: Date.now },
    "UpdatedDate": { type: Date },
    "Role": { type: String, enum: ['admin', 'superAdmin', 'trainer', 'student'], required:true }
})

export const userModel = mongoose.model('user', userSchema);