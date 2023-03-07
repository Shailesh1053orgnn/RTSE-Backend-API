import {Request,Response,NextFunction} from 'express';
import {IAcademyOffersModel} from '../@types/academyOffersType.js';
import {AcademyOffersModel} from '../models/academyOffers.model.js';
export class AcademyOffersController {
    // static async findAll(req: Request, res: Response) {
    //     const academyOffers = new AcademyOffersModel();
    //     const returnValue: IAcademyOffersModel[] = await academyOffers.findAll();
    //     if(returnValue.length > 0){
    //         res.status(200).send({ "status": 200, "success": true, data:returnValue});
    //     }else{
    //         res.status(200).send({"status": 200, "success": false, message:"Data Not found"});
    //     }
    // }
    static async findById(req: Request, res: Response) {
        const academyOffers = new AcademyOffersModel();
        const returnValue: IAcademyOffersModel[] = await academyOffers.findById({
            academy_id:req.query.academy_id
        });
        if(returnValue.length > 0){
            res.status(200).send({ "status": 200, "success": true, data:returnValue});
        }else{
            res.status(200).send({"status": 200, "success": false, message:"Data Not found"});
        }
    }  
}