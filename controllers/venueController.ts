import { Request, Response, NextFunction } from 'express';
import { IVenueModel } from '../@types/venuType.js';
import { venueModel } from '../models/venue.model.js';
export class VenueController {
    static async findAll(req: Request, res: Response) {
        const state = new venueModel();
        const returnValue: IVenueModel[] = await state.findAll();
        if (returnValue.length > 0) {
            res.status(200).send({ Response: { "status": 200, "success": true, data: returnValue } });
        } else {
            res.status(200).send({ Response: { "status": 200, "success": true, message: "Data Not found" } });
        }
    }
    static async findById(req: Request, res: Response) {
        const state = new venueModel();
        const returnValue: IVenueModel[] = await state.findById({
            venue_id: req.query.venue_id
        });
        if (returnValue.length > 0) {
            res.status(200).send({ Response: { "status": 200, "success": true, data: returnValue } });
        } else {
            res.status(200).send({ Response: { "status": 200, "success": true, message: "Data Not found" } });
        }
    }
}
