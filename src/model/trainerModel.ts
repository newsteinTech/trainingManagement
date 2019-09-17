import * as mongoose from "mongoose";

const TrainerSchema = new mongoose.Schema({
    "UserId" : Number,
    "Salary" : Number,
    "CreatedDate" : {type: Date.now},
    "UpdatedDate" : {type: Date.now},
    "IsActive" : Boolean,
    "Availability": {type: String, enum:['Weekdays-Morning', 'Weekdays-Evening','All-Weekdays', 'Only-Weekends', 'Both']},
    "Slot" : {type : "String", enum:['Weekdays-Morning', 'Weekdays-Evening','All-Weekdays', 'Only-Weekends', 'Both']},
    "Time" : String,
})

export const TrainerModel = mongoose.model('Trainer', TrainerSchema)