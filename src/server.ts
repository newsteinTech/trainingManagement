import  * as express from "express";
import * as bodyParser from "body-parser";
import * as mongoClient from "mongoose";
import { Request, Response } from "express";
import {Database} from "./startup/db";
import { Routes} from './startup/routes';

class App {
    app: express.Application;
    constructor() {
        //Express instance Creation
        this.app = express();        
        this.app.use(function(req, res, next) {
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
            next();
        });
        this.configBodyParser();
        Database.connectMongoDb();
        this.app.listen(4000,"localhost",function(){
            console.log("Listening to localhost port 4000");
        });
        

        Routes.configRoutes(this.app);
    }

    private configBodyParser() {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
    }

    
}

export const trainingManagementApp = new App();