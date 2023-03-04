import { Request, Response, NextFunction } from 'express';
import { IotpModel } from '../@types/otpType.js';
import { otpModel } from '../models/otp.model.js';
import jwt from 'jsonwebtoken';
import twilio from 'twilio';
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
                const accountSid = "ACfabcbe7eb5b53e67caa46b6e8029c38c";
            const authToken = "c148e2ad7952382dd854a90481f056a7";
            const client = twilio(accountSid, authToken);
            client.messages
                .create({
                    body: 'Your OTP for login: ' + OTP,
                    to: '+91' + req.body.mobileNo, // Text this number
                    from: '+19137529762', // From a valid Twilio number
                })
                .then((message) => console.log());
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
        const returnValue: IotpModel[] = await otp.verifyotp(req.params.verifyotp);

        if (returnValue.length > 0) {
            const token = generateAccessToken({ otp: req.params.verifyotp });
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