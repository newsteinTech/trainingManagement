import * as mongoose from "mongoose";

const TrainerSchema = new mongoose.Schema({
    "UserId": { type: Number, required: true },
    "Salary": { type: Number, required: true },
    "CreatedDate": { type: Date, default: Date.now },
    "UpdatedDate": { type: Date },
    "IsActive": Boolean,
    "Availability": { type: String, enum: ['Weekdays-Morning', 'Weekdays-Evening', 'All-Weekdays', 'Only-Weekends', 'Both'] },
    "Slot": { type: "String", enum: ['Weekdays-Morning', 'Weekdays-Evening', 'All-Weekdays', 'Only-Weekends', 'Both'] },
    "Time": String,
})

export const TrainerModel = mongoose.model('Trainer', TrainerSchema)