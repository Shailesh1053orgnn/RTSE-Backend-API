import { Request, Response, NextFunction } from 'express';
import { IsignupModel } from '../@types/signupType.js';
import { signupModel } from '../models/signup.model.js';
import jwt from 'jsonwebtoken';
import twilio from 'twilio';
export class signupController {
  static async register(req: Request, res: Response) {
    if (!req.body.hasOwnProperty('fullName') || typeof (req.body.fullName) != "string") {
      res.status(200).send({ "status": 400, "success": true, message: "Column fullName should be of type string OR Null" });
    } else if (!req.body.hasOwnProperty('mobileNo') || typeof (req.body.mobileNo) != "number") {
      res.status(200).send({ "status": 400, "success": true, message: "Column mobileNo should be of type number OR Null" });
    } else {
      const signup = new signupModel();
      const otp = Math.floor(Math.random() * 1000000);
      const returnValue: string = await signup.register({
        fullName: req.body.fullName,
        userEmail: req.body.userEmail,
        mobileNo: req.body.mobileNo,
        otp: otp
      });
      const accountSid = "ACfabcbe7eb5b53e67caa46b6e8029c38c";
      const authToken = "c148e2ad7952382dd854a90481f056a7";
      const client = twilio(accountSid, authToken);
      client.messages
        .create({
          body: 'Your OTP for login: ' + otp,
          to: '+91' + req.body.mobileNo, // Text this number
          from: '+19137529762', // From a valid Twilio number
        })
        .then((message) => console.log());
      if (returnValue == "sent otp") {
        res.status(200).send({ "status": 200, "success": true, "isRegisterd": true, message: "OTP send Successfully" });
      }
      else if (returnValue == "user not exist") {
        res.status(200).send({ "status": 200, "success": true, "isRegisterd": false, message: "User Not Exist" });
      } else {
        res.status(200).send({ "status": 200, "success": true, message: "Something Went Wrong" });
      }
    }
  }
}
function generateAccessToken(otp) {
  return (jwt.sign(otp, process.env.SECRET_KEY, { expiresIn: '1d' }));
}