import * as mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    "UserName": {type:String, required:true, unique:true},
    "Password": {type:String, required:true, },
    "Mobile": {type:Number,required:true, minlength:10},
    "Email": {type:String, required:true, unique:true},
    "IsActive": {type:Boolean, required:true},
    "CreatedDate": { type: Date, default: Date.now },
    "UpdatedDate": { type: Date },
    "Role": { type: String, enum : ['superAdmin', 'admin'], required:true }
})

export const userModel = mongoose.model('user', userSchema);