import { Request, Response, NextFunction } from 'express';
import { SplashScreenModel } from '../@types/SplashScreenType.js';
import { splashScreenModel } from '../models/Splashscreen.model.js';

 export class splashScreenController{
   static async saveImage(req:Request, res: Response){
        const image = new splashScreenModel();
        const returnValue: string = await image.saveImage({
            fileName: req.file.filename,
            fileURL:"../"+ req.file.destination +"/", 
            fileSize:req.file.filename,
            fileType:"image",
            fileDescription:"Description",
            createdDate: new Date()
            
        });
        res.status(200);
        res.send(returnValue);
   }
   static async findAll(req:Request, res: Response) {
    const image = new splashScreenModel();
    const returnValue: SplashScreenModel[] = await image.findAll();
    res.status(200);
    res.send(returnValue);
}
}