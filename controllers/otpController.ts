import { Request, Response, NextFunction } from 'express';
import { IotpModel } from '../@types/otpType.js';
import { otpModel } from '../models/otp.model.js';
import axios from 'axios';
import jwt from 'jsonwebtoken';
export class otpController {
    static async sendotp(req: Request, res: Response) {
        if (!req.body.hasOwnProperty('mobileNo') || typeof (req.body.mobileNo) != "number") {
            res.status(200).send({ "status": 400, "success": true, message: "Column mobileNo should be of type string OR Null" });
        } else {
            const otp = new otpModel();
            const OTP = Math.floor(Math.random() * 1000000);
            const returnValue: string = await otp.sendotp({
                mobileNo: req.body.mobileNo,
                otp: OTP,
                create_at: new Date(),
            });
            
            if (returnValue == "Ready For otp") {
                axios({
                    method: 'get',
                    url: 'http://smsjipra.in/http-api.php?username=narresh123&password=narresh123&senderid=HIRODR&route=4&number='+ req.body.mobileNo +'&message=Dear Student, OTP to login your HIGHER ORDER platform is '+ OTP +'. Do not share it with anyone&templateid=1007468468524884905',
                    responseType: 'stream'
                  })
                    .then(function (response) {
                      response
                    });
                res.status(200).send({ "status": 200, "success": true, "isRegisterd": true, message: "OTP send Successfully" });
            }
            else if (returnValue == "user not exist") {
                res.status(200).send({ "status": 200, "success": true, "isRegisterd": false, message: "User Not Exist" });
            } else {
                res.status(200).send({ "status": 200, "success": true, message: "Something Went Wrong" });
            }
        }
    }
    static async verifyotp(req: Request, res: Response) {
        const otp = new otpModel();
        const returnValue: IotpModel[] = await otp.verifyotp(req.query.verifyotp);

        if (returnValue.length > 0) {
            const token = generateAccessToken({ otp: req.query.verifyotp });
            res.status(200).send({ "status": 200, "success": true, message: token });
        }
        else {
            res.status(200).send({ "status": 200, "success": true, message: "Incorrect OTP" });  
        }
    }
}
function generateAccessToken(otp) {
    return (jwt.sign(otp, process.env.SECRET_KEY, { expiresIn: '1d' }));
}