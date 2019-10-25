import * as mongoose from "mongoose";

export class Database {
    private static readonly mongoDbUrl: string = "mongodb+srv://abdalpasha:abdal123@abdal-s91co.mongodb.net/SignUp?retryWrites=true&w=majority";

    public static connectMongoDb() {
        mongoose.connect(this.mongoDbUrl, { useNewUrlParser: true }).then(
            function (res: any) {
                console.log("Database TrainingManagement Connection Successfull.")
            }).catch(function (err: any) {
                console.error(err);
            });
    }
}