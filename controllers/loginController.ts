import { Request, Response, NextFunction } from 'express';
import { ILoginModel } from '../@types/loginType.js';
import { loginModel } from '../models/login.model.js';
import jwt from 'jsonwebtoken';
export class loginController {
    static async login(req:Request, res: Response) {
        const signin = new loginModel();
        const returnValue: ILoginModel[] = await signin.login(req.body.otp);

        if (returnValue.length >0)
        {
            const token = generateAccessToken({ otp: req.body.otp });
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