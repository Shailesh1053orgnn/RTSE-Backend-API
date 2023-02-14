import {Request,Response,NextFunction} from 'express';
import {IsignupModel} from '../@types/signupType.js';
import {signupModel} from '../models/signup.model.js';
export class signupController {
    static async register(req: Request, res: Response) {
            const signup = new signupModel();
            function between(min, max) {  
                return Math.floor(
                  Math.random() * (max - min + 1) + min
                )
              }
            const returnValue: string = await signup.register({
                fullName: req.body.fullName,
                mobileNo: req.body.mobileNo,
                userEmail: req.body.userEmail,
                otp:(between(100000, 900000)),
                createdDate: new Date(),
            });
            console.log(req.body.fullName)
            res.status(200);
            res.send(returnValue);
    }

    // static async findById(req: Request, res: Response) {
    //     const lead = new leadMgmtModel();
    //     const returnValue: ILeadModel[] = await lead.findById({
    //         lead_id:req.params.lead_id,
    //         affiliate_id:req.params.affiliate_id
    //     });
    //     res.status(200);
    //     res.send(returnValue);
    // }
    // static async update(req: Request, res: Response) {
    //     const lead = new leadMgmtModel();
    //     const returnValue: string = await lead.update({
    //         lead_id: parseInt(req.params.lead_id),
    //         affiliate_id: parseInt(req.params.affiliate_id),
    //         lead_leadCode: req.body.lead_leadCode,
    //         lead_leadOwner: req.body.lead_leadOwner
    //     res.status(200);
    //     res.send(returnValue);
    // }
  
}