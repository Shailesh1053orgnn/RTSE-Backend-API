import {Request,Response,NextFunction} from 'express';
import {IAcademyModel} from '../@types/academyType.js';
import {academyModel} from '../models/academy.model.js';
export class academyController {
    static async findAll(req: Request, res: Response) {
        const state = new academyModel();
        const returnValue: IAcademyModel[] = await state.findAll();
        res.status(200);
        res.send(returnValue);
    }
    static async findByLocation(req: Request, res: Response) {
        const state = new academyModel();
        const returnValue: IAcademyModel[] = await state.findByLocation({
            location:req.params.location
        });
        if(returnValue.length > 0){
            res.status(200).send({ "status": 200, "success": true, data:returnValue});
        }else{
            res.status(200).send({"status": 200, "success": false, message:"Data Not found"});
        }
    }
    
    
}