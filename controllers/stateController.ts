import { Request, Response, NextFunction } from 'express';
import { IStateModel } from '../@types/stateType.js';
import { stateModel } from '../models/state.model.js';
export class StateController {
    static async findAll(req: Request, res: Response) {
        const state = new stateModel();
        const returnValue: IStateModel[] = await state.findAll();
        if (returnValue.length > 0) {
            res.status(200).send({ Response: { "status": 200, "success": true, data: returnValue } });
        } else {
            res.status(200).send({ Response: { "status": 200, "success": true, message: "Data Not found" } });
        }
    }
    static async findById(req: Request, res: Response) {
        const state = new stateModel();
        const returnValue: IStateModel[] = await state.findById({
            state_id: req.query.state_id
        });
        if (returnValue.length > 0) {
            res.status(200).send({ Response: { "status": 200, "success": true, data: returnValue } });
        } else {
            res.status(200).send({ Response: { "status": 200, "success": true, message: "Data Not found" } });
        }
    }
}
