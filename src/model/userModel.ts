import * as mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    "UserName" : String,
    "Password" : String,
    "Mobile" : Number,
    "Email" : String,
    "IsActive" : Boolean,
    "CreatedDate" : {type: Number, default:Date.now},
    "UpdatedDate" : {type : Number, default : Date.now},
    "Role" : {type: String, enum:['admin', 'superAdmin','trainer','student']}
})

export const userModel = mongoose.model('user', userSchema);