import {Request,Response,NextFunction} from 'express';
import {IStateModel} from '../@types/stateType.js';
import {stateModel} from '../models/state.model.js';
export class StateController {
    static async findAll(req: Request, res: Response) {
        const state = new stateModel();
        const returnValue: IStateModel[] = await state.findAll();
        res.status(200);
        res.send(returnValue);
    }
    static async findById(req: Request, res: Response) {
        const state = new stateModel();
        const returnValue: IStateModel[] = await state.findById({
            state_id:req.params.state_id
        });
        if(returnValue.length > 0){
            res.status(200).send({ "status": 200, "success": true, data:returnValue});
        }else{
            res.status(200).send({"status": 200, "success": false, message:"Data Not found"});
        }
    }
    
    
}