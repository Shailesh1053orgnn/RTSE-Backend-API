import { Request, Response, NextFunction } from 'express';
import { ISpaceTypeModel } from '../@types/spaceTypeType.js';
import { spaceTypeModel } from '../models/spaceType.model.js';
export class spaceTypeController {
    static async findAll(req: Request, res: Response) {
        const state = new spaceTypeModel();
        const returnValue: ISpaceTypeModel[] = await state.findAll();
        if (returnValue.length > 0) {
            res.status(200).send({ Response: { "status": 200, "success": true, data: returnValue } });
        } else {
            res.status(200).send({ Response: { "status": 200, "success": false, message: "Data Not found" } });
        }
    }
    static async findById(req: Request, res: Response) {
        const state = new spaceTypeModel();
        const returnValue: ISpaceTypeModel[] = await state.findById({
            id: req.params.id
        });
        if (returnValue.length > 0) {
            res.status(200).send({ Response: { "status": 200, "success": true, data: returnValue } });
        } else {
            res.status(200).send({ Response: { "status": 200, "success": false, message: "Data Not found" } });
        }
    }
}