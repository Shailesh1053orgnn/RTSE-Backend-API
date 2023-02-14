import {Request,Response,NextFunction} from 'express';
import {IStateModel} from '../@types/stateTypes.js';
import {stateMgmtModel} from '../models/stateMgmt.model.js';
export class StateMgmtController {
    static async findAll(req: Request, res: Response) {
        const state = new stateMgmtModel();
        const returnValue: IStateModel[] = await state.findAll();
        res.status(200);
        res.send(returnValue);
    }
    static async findById(req: Request, res: Response) {
        const state = new stateMgmtModel();
        const returnValue: IStateModel[] = await state.findById({
            state_id:req.params.state_id
        });
        res.status(200);
        res.send(returnValue);
    }
    
    
}