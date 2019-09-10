import * as jwt from "jsonwebtoken";
import * as express from "express";

export class AuthenticateService{
    public static async authenticate(req:any,res:express.Response,next:any){
        let token = req.header('Authorization');
        if(token == null){
            //validate the token
            return res.json("Access Denied");
        }

        try {
            let decodedData = await jwt.verify(token,"secretkey");
            req.user = decodedData;
            next();
        } catch (err) {
            console.log(err);
            return res.json(err);
        }
    }
} 