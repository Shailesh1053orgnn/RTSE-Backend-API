import {Request,Response,NextFunction} from 'express';
import {IotpModel} from '../@types/otpType.js';
import {otpModel} from '../models/otp.model.js';
import jwt from 'jsonwebtoken';
import twilio from 'twilio';
export class otpController {
    static async sendotp(req: Request, res: Response) {
            const otp = new otpModel();
        const OTP = Math.floor(Math.random() * 1000000);
            const returnValue: string = await otp.sendotp({                
                mobileNo: req.body.mobileNo,
                otp:OTP,
                create_at: new Date(),
              });
              
              const accountSid = "ACfabcbe7eb5b53e67caa46b6e8029c38c";
const authToken = "bcda664d94927562cc5a1d6fb918b008";
const client =twilio(accountSid, authToken);
client.messages
  .create({
    body: 'Your OTP for login: '+OTP,
    to: '+91'+req.body.mobileNo, // Text this number
    from: '+19137529762', // From a valid Twilio number
  })
  .then((message) => console.log(message.sid));
            res.status(200);
            res.send(returnValue);
    }

    static async verifyotp(req:Request, res: Response) {
        const otp = new otpModel();
        const returnValue: IotpModel[] = await otp.verifyotp(req.params.verifyotp);

        if (returnValue.length >0)
        {
            const token = generateAccessToken({ otp: req.params.verifyotp });
            res.send({'token': token});
        }
        else
        {
            res.send({'token': '', 'error': 'Incorrect OTP'});
        }
    }
}
function generateAccessToken(otp) {
    return (jwt.sign(otp, process.env.SECRET_KEY, { expiresIn: '1d' }));
  }