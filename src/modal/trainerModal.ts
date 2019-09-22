import * as mongoose from "mongoose";
const trainerSchema = new mongoose.Schema({
    userId: {type: Number, required: true, unique: true},
    name: String,
    salary: String,
    availability:{classType: String, enum:['Weekdays Morning','Weekdays Evening', 'Weekend', 'All Weekdays', 'Both'],customTime: String},
    active : Boolean,
    createdDate: {type: Date, default:Date.now},
    updatedDate: {type: Date, default:Date.now}
});

export const trainerModel = mongoose.model('trainer',trainerSchema); 
