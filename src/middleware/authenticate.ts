import * as jwt from "jsonwebtoken";
import * as express from "express";

export class AuthenticateService{
    public static async authenticate(req:any,res:any,next:any){
        let token = req.headers['authorization'];
        if(token == null){
            //validate the token
            return res.json("Access Denied");
        }

        try {
            token = token.split(' ')[1];
            let decodedData = await jwt.verify(token,"secretkey");
            req.user = decodedData;
            //console.log(req.user);
            next();
        } catch (err) {
            console.log(err);
            return res.json(err);
        }
    }
} 