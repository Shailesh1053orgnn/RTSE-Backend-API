import { Request, Response, NextFunction } from 'express';
import { IAcademyModel } from '../@types/academyType.js';
import { academyModel } from '../models/academy.model.js';
export class academyController {
    static async findAll(req: Request, res: Response) {
        const state = new academyModel();
        const returnValue: IAcademyModel[] = await state.findAll();
        if (returnValue.length > 0) {
            res.status(200).send({ "status": 200, "success": true, data: returnValue });
        } else {
            res.status(200).send({ "status": 200, "success": true, message: "Data Not found" });
        }
    }
    static async findById(req: Request, res: Response) {
        const state = new academyModel();
        const returnValue: IAcademyModel[] = await state.findById({
            academy_id: req.query.academy_id
        });
        if (returnValue.length > 0) {
            res.status(200).send({ "status": 200, "success": true, data: returnValue });
        } else {
            res.status(200).send({ "status": 200, "success": true, message: "Data Not found" });
        }
    }


}