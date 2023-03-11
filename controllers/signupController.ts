import { Request, Response, NextFunction } from 'express';
import { IsignupModel } from '../@types/signupType.js';
import { signupModel } from '../models/signup.model.js';
import axios from 'axios';
import jwt from 'jsonwebtoken';
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
      axios({
        method: 'get',
        url: 'http://smsjipra.in/http-api.php?username=narresh123&password=narresh123&senderid=HIRODR&route=4&number='+ req.body.mobileNo +'&message=Dear Student, OTP to login your HIGHER ORDER platform is '+ otp +'. Do not share it with anyone&templateid=1007468468524884905',
        responseType: 'stream'
      })
        .then(function (response) {
          response
        });
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