import { Request, Response, NextFunction } from 'express';
import { SplashScreenModel } from '../@types/splashScreenType.js';
import { splashScreenModel } from '../models/splashScreen.model.js';

export class splashScreenController {
    static async saveImage(req: Request, res: Response) {
        const image = new splashScreenModel();
        const returnValue: string = await image.saveImage({
            fileName: req.file.filename,
            fileURL: "../" + req.file.destination + "/",
            fileSize: req.file.filename,
            fileType: "image",
            fileDescription: "Description",
            createdDate: new Date()

        });
        if (returnValue.length > 0) {
            res.status(200).send({ Response: { "status": 200, "success": true, data: returnValue } });
        } else {
            res.status(200).send({ Response: { "status": 200, "success": true, message: "Data Not found" } });
        }
    }
    static async findAll(req: Request, res: Response) {
        const image = new splashScreenModel();
        const returnValue: SplashScreenModel[] = await image.findAll();
        if (returnValue.length > 0) {
            res.status(200).send({ Response: { "status": 200, "success": true, data: returnValue } });
        } else {
            res.status(200).send({ Response: { "status": 200, "success": true, message: "Data Not found" } });
        }
    }
}