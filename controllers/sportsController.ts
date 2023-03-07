import { Request, Response, NextFunction } from 'express';
import { ISportsModel } from '../@types/sportsType.js';
import { sportsModel } from '../models/sports.model.js';
export class sportsController {
    static async findAll(req: Request, res: Response) {
        const sports = new sportsModel();
        const returnValue: ISportsModel[] = await sports.findAll();
        if (returnValue.length > 0) {
            res.status(200).send({ Response: { "status": 200, "success": true, data: returnValue } });
        } else {
            res.status(200).send({ Response: { "status": 200, "success": true, message: "Data Not found" } });
        }
    }
    static async findByName(req: Request, res: Response) {
        const sports = new sportsModel();
        const returnValue: ISportsModel[] = await sports.findByName({
            sportsname: req.params.sportsname
        });
        if (returnValue.length > 0) {
            res.status(200).send({ "status": 200, "success": true, "message": returnValue });
        } else {
            res.status(200).send({ "status": 200, "success": true, message: "Data Not found" });
        }
    }
}