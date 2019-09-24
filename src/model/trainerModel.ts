import * as mongoose from "mongoose";

const TrainerSchema = new mongoose.Schema({
    "TrainerName": { type: String, required: true},
    "Password" : {type: String, required: true},
    "Email" : {type: String, required: true, unique:true},
    "Salary": { type: Number, required: true },
    "CreatedDate": { type: Date, default: Date.now },
    "UpdatedDate": { type: Date },
    "IsActive": Boolean,
    "Availability": { type: String, enum: ['All-Weekdays', 'Only-Weekends', 'Both'] },
    "Slot": { type: String, enum: ['Weekdays-Morning', 'Weekdays-Evening', 'Weekends-Morning','Weekends-Evening','Both-Morning', 'Both-Evening'] },
    "Time": String,
})

export const TrainerModel = mongoose.model('Trainer', TrainerSchema)